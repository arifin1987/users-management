const RegistrationForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const inputValue = { name, email, password };
    console.log(name, email, password);
    console.log(inputValue);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="border-2 border-blue-400 p-4 mx-auto text-center my-8 w-1/2 bg-blue-200"
      >
        <input
          className="border-2 p-2 border-blue-500 my-2 w-1/2"
          type="text"
          name="name"
          id=""
        />
        <br />
        <input
          className="border-2 p-2 border-blue-500 my-2 w-1/2"
          type="email"
          name="email"
          id=""
        />
        <br />
        <input
          className="border-2 p-2 border-blue-500 my-2 w-1/2"
          type="password"
          name="password"
          id=""
        />
        <br />
        <input
          className="border-2 p-2 border-blue-500 bg-blue-400 text-white fornt-bold w-1/2"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default RegistrationForm;
