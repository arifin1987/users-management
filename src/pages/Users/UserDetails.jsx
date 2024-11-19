import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const userDetails = useLoaderData();
  const { name, email } = userDetails;
  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};

export default UserDetails;
