import React from "react";
import Button from "../../components/Button/Button";

interface SliceLayoutProps {
  title: string;
  description: string;
  callback: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function SolidPrinciplesLayout({
  title,
  description,
  callback,
}: SliceLayoutProps) {
  function showModal(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {}

  return (
    <div className="w-full h-screen grid place-content-center justify-items-center">
      <div className="w-3/4 h-96 flex flex-col justify-evenly items-center">
        <h3 className="text-white text-center font-bold text-6xl">{title}</h3>
        <p className="text-2xl text-white text-center">{description}</p>
        <Button title="Go to application" callback={callback}></Button>
      </div>
    </div>
  );
}
