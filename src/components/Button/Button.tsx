import React from "react";

interface ButtonProps {
  title: string;
  callback: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Button({ title, callback }: ButtonProps) {
  return (
    <button
      className=" z-50 w-44 ease-in duration-300 bg-cyan-700 hover:bg-cyan-950 text-white font-bold py-2 px-4 rounded-full"
      onClick={(e) => callback(e)}
    >
      {title}
    </button>
  );
}
