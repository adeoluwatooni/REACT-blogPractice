import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "The Wonder Of fashion", body: "fashion is ...", author: "Mario", id: 1 },    
    { title: "What is fashion ?", body: "This is also ...", author: "Luigi", id: 2 },
    { title: "Why do fashion ?", body: "This is because ...", author: "Lala", id: 3 },
    {title: "Who is fashion ?", body: "They are people ...", author: "Lala", id: 4}
  ])

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => 
      blog.id !== id
    )
    setBlogs(newBlogs)
  }


  return (
    <div className="Home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={ handleDelete } />

    </div>
  );
}

export default Home;