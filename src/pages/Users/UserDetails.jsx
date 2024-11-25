import { useLoaderData, useParams } from "react-router-dom";

const UserDetails = () => {
  const { userId } = useParams();

  console.log(userId);
  const users = useLoaderData();
  console.log(users);
  const singleUser = users.find((user) => user.id == userId);
  console.log(singleUser);

  return (
    <div className="border-2 border-gray-800 rounded-md w-1/2 p-4 text-center mx-auto m-4 bg-blue-600 text-white">
      <h1>Name:{singleUser.name}</h1>
      <p> Email:{singleUser.email}</p>
    </div>
  );
};

export default UserDetails;
