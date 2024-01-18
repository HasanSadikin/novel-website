import { PhotoIcon } from "@heroicons/react/24/solid";
import React from "react";

const NoImage = () => {
  return (
    <div className="bg-gray-300 w-full h-full flex justify-center items-center text-white">
      <PhotoIcon className="w-8 h-8" />
    </div>
  );
};

export default NoImage;
