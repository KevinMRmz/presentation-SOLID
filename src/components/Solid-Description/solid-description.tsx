import React from "react";
import {
  SOLID_DEFINITION_TITLE,
  SOLID_DEFINITION_DESCRIPTION,
} from "../../constants";

export default function SolidDescription() {
  return (
    <div className="w-full h-screen grid place-content-center justify-items-center">
      <div className="text-white text-center w-3/4 h-96 flex flex-col justify-evenly">
        <h2 className="text-6xl font-bold">{SOLID_DEFINITION_TITLE}</h2>
        <p className="text-2xl">{SOLID_DEFINITION_DESCRIPTION}</p>
      </div>
    </div>
  );
}
