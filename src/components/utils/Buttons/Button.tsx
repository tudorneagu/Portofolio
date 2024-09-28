function Button({
  onClick,
  type = "button",

  content = "My Button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-main rounded-md text-button-m  w-auto py-1 px-4 text-white`}>
      {content}
    </button>
  );
}

export default Button;
