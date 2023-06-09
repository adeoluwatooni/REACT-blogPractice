import { Link } from "react-router-dom";

const NotFound = () => {
  return ( 
    <div className="not-found">
      <h1>Oops, seems you're wandering again... </h1>

      <br />
      <br />
      <p>
        That link wouldn't lead you anywhere you want to go, but its a good thing we found you! 😃
        
        <br />
        <br />
        <br />
        <Link to='/' >click here to go back home. 🏠</Link>
      </p>
    </div>
  );
}
 
export default NotFound;