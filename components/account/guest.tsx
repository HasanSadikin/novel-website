import { handleLogin } from "@/lib/actions";

import Input from "@/components/ui/input";

const Guest = () => {
  return (
    <>
      <h1 className="text-center font-bold text-3xl py-8">Login</h1>
      <form className="flex flex-col" action={handleLogin}>
        <Input name="email" />
        <Input name="password" type="password" />
        <button className="disabled:bg-gray-300 flex items-center justify-center bg-secondary w-full text-white py-3 px-2 rounded-md mt-5">
          Login
        </button>
      </form>
    </>
  );
};

export default Guest;
