import React, { useState } from "react";
import { SliceLayout } from "../../layouts";
import { OPEN_CLOSE_TITLE, OPEN_CLOSE_DESCRIPTION } from "../../constants";
import TodoApp from "../todo-app/todo-app";

export default function OpenClose() {
  const [show, setShow] = useState<boolean>(false);
  function showModal(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setShow(true);
  }

  return (
    <>
      <SliceLayout
        title={OPEN_CLOSE_TITLE}
        description={OPEN_CLOSE_DESCRIPTION}
        callback={showModal}
      ></SliceLayout>

      <TodoApp showApp={show} setShowApp={setShow}></TodoApp>
    </>
  );
}
