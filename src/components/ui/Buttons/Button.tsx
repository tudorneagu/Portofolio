import type { ButtonProps } from "../../../@types/index.types";
function Button({
  onClick,
  type = "button",
  content = "My Button",
  rounded = "rounded-md",
  border = "border-transparent border-2 hover:border-btn-hover-stroke ",
  value,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-main  ${border} lg:text-button-m  w-auto py-2 px-4 ${rounded} text-white hover:bg-btn-hover-bg hover:text-btn-hover-stroke  transition-all duration-300 focus:bg-medium focus:outline-medium`}
      value={value}>
      {content}
    </button>
  );
}

export default Button;
