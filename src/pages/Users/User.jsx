import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, address } = user;
  return (
    <div className="bg-slate-200 p-8 flex flex-col">
      <h1>{name}</h1>
      <p>{email}</p>
      <p className="flex-grow">{address.street}</p>
      <Link
        to={`/users/${id}`}
        className="text-white bg-green-600 p-2 text-center"
      >
        View Details
      </Link>
    </div>
  );
};

export default User;
