import { toPascalCase } from "@/utils/utils";
import { ChangeEvent } from "react";

interface InputProps {
  type?: "text" | "password";
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ type = "text", name, onChange }: InputProps) {
  return (
    <>
      <label htmlFor="email" className="text-black">
        {toPascalCase(name)}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="border-secondary border-2 rounded-md px-3 py-2"
      />
    </>
  );
}

export default Input;
