import type { ButtonProps } from "../../../@types/index.types";
function Button({
  onClick,
  type = "button",
  content = "My Button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-main rounded-md text-button-m  w-auto py-2 px-4 text-white`}>
      {content}
    </button>
  );
}

export default Button;
