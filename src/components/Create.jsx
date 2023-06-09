import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('luigi')
  const [isPending, setIsPending] = useState(false)

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()

    const blog = { title, body, author }
    setIsPending(true)


    // I only added the set timeout so I can see the button change before it completes the POST request.
    setTimeout(() => {
      fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added')
      setIsPending(false)
      history.push('/')
    })
    }, 1000);
    
  }

  return ( 
    <div className="create">
      <h2>
        Create New Article!
      </h2>

      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Blog body:</label>
        <textarea required value={body} onChange={(e) => setBody(e.target.value)} ></textarea>

        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
          <option value="luigi">luigi</option>
        </select>

        {isPending && <button disabled>Submitting</button>}
        {!isPending && <button>Add Blog</button>}
      </form>
    </div>
  );
}
 
export default Create;