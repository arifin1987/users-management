import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const postDetails = useLoaderData();
  return (
    <div className="border-2 border-green-500 p-4 mx-auto w-1/2 my-12">
      <h1 className="font-semibold text-2xl">{postDetails.title}</h1>
      <p>{postDetails.body}</p>
    </div>
  );
};

export default PostDetails;
