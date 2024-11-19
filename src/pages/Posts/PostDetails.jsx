import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const postDetails = useLoaderData();
  return (
    <div className="border-2 border-green-500 p-4">
      <h1 className="font-semibold ">{postDetails.title}</h1>
      <p>{postDetails.body}</p>
    </div>
  );
};

export default PostDetails;
