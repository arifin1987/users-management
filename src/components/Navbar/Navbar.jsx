import { useState } from "react";
import Link from "../Link";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/users", name: "Users" },
    { id: 4, path: "/posts", name: "Posts" },
    { id: 5, path: "/register", name: "Register" },
  ];
  return (
    <nav>
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open === true ? <IoMdClose /> : <FiMenu />}
      </div>

      <ul
        className={`md:flex duration-1000 absolute md:static ${
          open ? "top-16" : "-top-60"
        } bg-yellow-200 px-6 md:py-4 shadow-lg`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
