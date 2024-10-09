import type { MouseEventHandler } from "react";

export interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  content?: string;
  rounded?: string;
  border?: string;
  value?: string;
}

export interface Project {
  id?: number;
  title?: string | undefined;
  date?: string;
  description?: string;
  stack?: string[];
  images?: string[] | undefined;
  link?: string;
  "full-description"?: string;
}
