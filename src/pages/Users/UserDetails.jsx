import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const users = useParams();
  console.log(users);
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${users.id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div className="border-2 border-gray-800 rounded-md w-1/2 p-4 text-center">
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default UserDetails;
