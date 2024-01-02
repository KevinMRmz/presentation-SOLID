import React, { useState } from "react";
import { SliceLayout } from "../../layouts";
import {
  LISKOV_SUSTITUTION_TITLE,
  LISKOV_SUSTITUTION_DESCRIPTION,
} from "../../constants";
import TodoApp from "../todo-app/todo-app";

export default function LiskovSustitution() {
  const [show, setShow] = useState<boolean>(false);
  function showModal(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setShow(true);
  }

  return (
    <>
      <SliceLayout
        title={LISKOV_SUSTITUTION_TITLE}
        description={LISKOV_SUSTITUTION_DESCRIPTION}
        callback={showModal}
      ></SliceLayout>

      <TodoApp showApp={show} setShowApp={setShow}></TodoApp>
    </>
  );
}
