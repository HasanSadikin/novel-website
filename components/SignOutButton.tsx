"use client";

import { useRef } from "react";

const SignOutButton = () => {
  const formRef = useRef<HTMLFormElement>(null);

  function logout() {
    formRef.current?.submit();
  }

  return (
    <>
      <button onClick={logout}>Logout</button>
      <form
        ref={formRef}
        action="/auth/logout"
        method="POST"
        className="hidden"
      ></form>
    </>
  );
};

export default SignOutButton;
