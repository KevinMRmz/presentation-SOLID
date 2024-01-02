import React, { useState } from "react";
import { SliceLayout } from "../../layouts";
import {
  INTERFACE_SEGREGATION_TITLE,
  INTERFACE_SEGREGATION_DESCRIPTION,
} from "../../constants";
import TodoApp from "../todo-app/todo-app";

export default function InterfaceSecregation() {
  const [show, setShow] = useState<boolean>(false);
  function showModal(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setShow(true);
  }

  return (
    <>
      <SliceLayout
        title={INTERFACE_SEGREGATION_TITLE}
        description={INTERFACE_SEGREGATION_DESCRIPTION}
        callback={showModal}
      ></SliceLayout>

      <TodoApp showApp={show} setShowApp={setShow}></TodoApp>
    </>
  );
}
