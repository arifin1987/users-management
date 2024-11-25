import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div className="border-2 p-2 border-blue-500 rounded-md flex flex-col">
      <h1 className="text-xl font-semibold">Title: {title}</h1>
      <p className="flex-grow">{body}</p>
      <Link
        to={`/posts/${id}`}
        className="w-full bg-blue-500 text-white p-2 rounded-md text-center"
      >
        View Details
      </Link>
    </div>
  );
};

export default Post;
