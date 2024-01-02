import { createContext } from "react";

export interface ChangeWindowAttributes {
  starsSpeed: 1 | 10;
  bgColor: "#fff" | "#1c1c2a";
}

interface ChangeWindowProps extends ChangeWindowAttributes {
  changeToApplication?: () => void;
  changeToPresentation?: () => void;
}

const ChangeWindowContext = createContext<ChangeWindowProps>({
  starsSpeed: 10,
  bgColor: "#1c1c2a",
});

export default ChangeWindowContext;
