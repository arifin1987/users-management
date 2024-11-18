import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between my-4">
      <h1>users management</h1>
      <div>
        <Link className="mr-4" to="/">
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </div>
    </div>
  );
};

export default Navbar;
