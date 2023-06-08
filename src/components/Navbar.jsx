

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/">
        <h1> The Fashion Blog</h1>
      </a>
      
      <div>
        <a href="/">
          Home
        </a>

        {/* <a href="/create" style={{color:"white", backgroundColor:"#f1356d", borderRadius:8}}></a> */}
        <a href="/create">
          Create New Blog
        </a>
      </div>
    </nav>
  )
}

export default Navbar;