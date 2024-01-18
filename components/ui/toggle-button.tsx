"use client";
import { useState } from "react";

const ToggleButton = ({
  children,
  toggle = false,
}: {
  children: React.ReactNode;
  toggle?: boolean;
}) => {
  const [isToggle, setToggle] = useState<boolean>(toggle);

  function handleToggle() {
    setToggle((prev) => !prev);
  }
  return (
    <button
      onClick={handleToggle}
      type="button"
      className={`duration-200 ease-in-out w-full h-full  aspect-square rounded-md flex justify-center items-center ${
        isToggle ? "bg-secondary text-white" : "bg-gray-300 text-white"
      }`}
    >
      {children}
    </button>
  );
};

export default ToggleButton;
