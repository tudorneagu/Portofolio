import type { MouseEventHandler } from "react";

export interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  content?: string;
  rounded?: string;
  border?: string;
  value?: string;
  children?: React.ReactNode;
}

export interface Project {
  id?: number;
  title: string;
  date?: string;
  description?: string;
  stack?: string[];
  images: string[];
  link?: string;
  "full-description"?: string;
  notes?: string;
  github?: { front?: string; back?: string };
}
