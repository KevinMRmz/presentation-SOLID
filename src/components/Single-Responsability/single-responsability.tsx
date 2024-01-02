import React, { useState } from "react";
import { SliceLayout } from "../../layouts";
import {
  SINGLE_RESPONSABILITY_TITLE,
  SINGLE_RESPONSABILITY_DESCRIPTION,
} from "../../constants";
import TodoApp from "../todo-app/todo-app";

export default function SingleResponsability() {
  const [show, setShow] = useState<boolean>(false);
  function showModal(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setShow(true);
  }

  return (
    <>
      <SliceLayout
        title={SINGLE_RESPONSABILITY_TITLE}
        description={SINGLE_RESPONSABILITY_DESCRIPTION}
        callback={showModal}
      ></SliceLayout>

      <TodoApp showApp={show} setShowApp={setShow}></TodoApp>
    </>
  );
}
