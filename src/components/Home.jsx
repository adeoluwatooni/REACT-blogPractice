import { useState } from "react";
import BlogList from "./BlogList";
import { useEffect } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState(null)

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => 
      blog.id !== id
    )
    setBlogs(newBlogs)
  }

  useEffect(() => {
    fetch('http://localhost:3000/blogs')
      .then(res => {
        res.json()
      })
      .then((data) => {
        setBlogs(data)
      })
  }, [])

  return (
    <div className="Home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={ handleDelete } />

    </div>
  );
}

export default Home;