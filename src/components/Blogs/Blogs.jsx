import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddBookmark, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-2/3 ">
      <h1 className="text-2xl mb-4">Number of Blogs: {blogs.length}</h1>
      <div>
        {blogs.map((blog, idx) => (
          <Blog
            key={idx}
            blog={blog}
            handleAddBookmark={handleAddBookmark}
            handleMarkAsRead={handleMarkAsRead}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
