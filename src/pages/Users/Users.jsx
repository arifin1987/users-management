import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h1>Users: {users.length}</h1>
      <div className="md: grid grid-cols-4 gap-8">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
