"use client";

import { handleLogout } from "@/lib/actions";

const LogoutButton = () => {
  return (
    <button
      onClick={async () => handleLogout()}
      className="flex items-center justify-center bg-secondary w-full text-white py-3 px-2 rounded-md mt-5"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
