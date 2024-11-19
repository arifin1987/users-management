import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div>
      <h1>Posts: {posts.length}</h1>
      <div className="md:grid grid-cols-4 gap-4">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
