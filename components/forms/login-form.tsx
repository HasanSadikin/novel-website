const LoginForm = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <form
        className="flex flex-col justify-evenly h-96 w-9/12 rounded-md px-8 py-10 bg-white"
        action="/auth/login"
        method="post"
      >
        <h1 className="text-secondary text-lg text-center font-bold">Login</h1>
        <label htmlFor="email" className="text-secondary">
          Email
        </label>
        <input
          type="text"
          name="email"
          className="w-full px-3 py-2 border-secondary border-2 rounded-md"
          required
        />
        <label htmlFor="password" className="text-secondary">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="w-full px-3 py-2 border-secondary border-2 rounded-md"
          required
        />
        <button className="w-full h-10 bg-secondary text-white rounded-md">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
