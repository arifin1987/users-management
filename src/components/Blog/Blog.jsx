import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddBookmark, handleMarkAsRead }) => {
  const { cover, title, author, reading_time, id, hashtags } = blog;
  return (
    <div className="  mb-4">
      <div>
        <img src={cover} alt="" />
        <h1>{title}</h1>
        <p>{author}</p>
        {hashtags.map((tag, idx) => (
          <li key={idx}>{tag}</li>
        ))}
      </div>
      <div>
        <button
          onClick={() => handleAddBookmark(blog)}
          className="text-2xl text-red-500"
        >
          <FaBookmark></FaBookmark>
        </button>

        <button
          onClick={() => handleMarkAsRead(reading_time, id)}
          className="text-blue-500 ml-4"
        >
          {reading_time} min read
        </button>
      </div>
    </div>
  );
};

export default Blog;
