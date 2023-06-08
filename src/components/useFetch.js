import { useState, useEffect } from "react"

const useFetch = (url) => {

  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    const abortConst = new AbortController()

    setTimeout(() => {
      fetch(url, {signal: abortConst.signal})
        .then(res => {
          if (!res.ok) {
            throw Error('could not fetch the data for that resource...')
          }
          return res.json()
        })
        .then(data => {
          setData(data)
          setIsPending(false)
          setError(null)
        })
          .catch((err) => {
            setError(err.message)
            setIsPending(false)
        })
    }, 1000);

    return () => abortConst.abort()
  }, [url])

  return { data, isPending, error }
}

export default useFetch


//  npx json-server --watch database/db.json --port 8000