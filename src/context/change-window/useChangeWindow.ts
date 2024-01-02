import { useContext } from "react";
import ChangeWindowContext from "./change-window.context";

export default function useChangeWindow() {
  return useContext(ChangeWindowContext);
}
