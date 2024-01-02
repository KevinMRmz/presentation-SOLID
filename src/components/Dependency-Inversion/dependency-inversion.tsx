import React, { useState } from "react";
import { SliceLayout } from "../../layouts";
import {
  DEPENDENCY_INVERSION_DESCRIPTION,
  DEPENDENCY_INVERSION_TITLE,
} from "../../constants";
import TodoApp from "../todo-app/todo-app";

export default function DependencyInversion() {
  const [show, setShow] = useState<boolean>(false);
  function showModal(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setShow(true);
  }

  return (
    <>
      <SliceLayout
        title={DEPENDENCY_INVERSION_TITLE}
        description={DEPENDENCY_INVERSION_DESCRIPTION}
        callback={showModal}
      ></SliceLayout>

      <TodoApp showApp={show} setShowApp={setShow}></TodoApp>
    </>
  );
}
