import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, address } = user;
  return (
    <div className="bg-slate-200 p-8">
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{address.street}</p>
      <Link to={`/users/${id}`}>View Details</Link>
    </div>
  );
};

export default User;
