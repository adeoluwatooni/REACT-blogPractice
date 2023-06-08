import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1> The Fashion Blog</h1>
      </Link>
      
      <div >
        <Link to="/">  Home </Link>
        <Link to="/create">  Create New Blog  </Link>
      </div>
    </nav>
  )
}

export default Navbar;

