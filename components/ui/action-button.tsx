import React from "react";

interface Props {
  children: React.ReactNode;
  toggle?: boolean;
}

const ActionButton = ({ children, toggle = false }: Props) => {
  return (
    <button
      type="button"
      className={`duration-200 ease-in-out w-full h-full  aspect-square rounded-md flex justify-center items-center ${
        toggle ? "bg-secondary text-white" : "bg-gray-200 text-white"
      }`}
    >
      {children}
    </button>
  );
};

export default ActionButton;
