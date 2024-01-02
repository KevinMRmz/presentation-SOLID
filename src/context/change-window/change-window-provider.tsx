import ChangeWindowContext, {
  ChangeWindowAttributes,
} from "./change-window.context";

import { useState } from "react";

interface ChangeWindowProps {
  children: JSX.Element;
}

export default function ChangeWindowProvider({ children }: ChangeWindowProps) {
  const [changeWindow, setChangeWindow] = useState<ChangeWindowAttributes>({
    starsSpeed: 10,
    bgColor: "#1c1c2a",
  });

  function changeToApplication(): void {
    setChangeWindow({ starsSpeed: 1, bgColor: "#fff" });
  }

  function changeToPresentation(): void {
    setChangeWindow({ starsSpeed: 10, bgColor: "#1c1c2a" });
  }

  return (
    <ChangeWindowContext.Provider
      value={{ ...changeWindow, changeToApplication, changeToPresentation }}
    >
      {children}
    </ChangeWindowContext.Provider>
  );
}
