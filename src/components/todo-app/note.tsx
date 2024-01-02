import React from "react";
import { NoteProps } from "../../interfaces/note.interface";

export default function Note({ title, description }: NoteProps) {
  return (
    <div className=" bg-orange-400 shadow-lg w-72 h-72 p-5 m-4 duration-300 ease-in hover:scale-90">
      <h3 className="">
        <span className="font-bold">Title: </span>
        {title}
      </h3>

      <p className="font-bold mt-9">Description:</p>
      <p className="">{description}</p>
    </div>
  );
}
