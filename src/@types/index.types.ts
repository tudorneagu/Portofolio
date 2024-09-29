import type { MouseEventHandler } from "react";
export interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  content?: string;
}
