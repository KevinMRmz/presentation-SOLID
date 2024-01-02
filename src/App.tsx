import React from "react";

import {
  SolidTitle,
  SolidDescription,
  SingleResponsability,
  Stars,
  OpenClose,
  LiskovSustitution,
  InterfaceSegregation,
  DependencyInversion,
  TodoApp,
  Conclucion,
} from "./components";

import "./assets/css/color.css";
import "./assets/css/scrollbar.css";

function App() {
  return (
    <div className="main-bg w-full relative">
      <Stars></Stars>
      <SolidTitle></SolidTitle>

      <SolidDescription></SolidDescription>

      <SingleResponsability></SingleResponsability>

      <OpenClose></OpenClose>

      <LiskovSustitution></LiskovSustitution>

      <InterfaceSegregation></InterfaceSegregation>

      <DependencyInversion></DependencyInversion>

      <Conclucion></Conclucion>
    </div>
  );
}

export default App;
