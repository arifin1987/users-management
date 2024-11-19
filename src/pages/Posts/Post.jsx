import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div className="border-2 p-2 border-blue-500 rounded-md">
      <h1 className="text-xl font-semibold">Title: {title}</h1>
      <p>{body}</p>
      <Link to={`/posts/${id}`} className="text-blue-500">
        View Detais
      </Link>
    </div>
  );
};

export default Post;
