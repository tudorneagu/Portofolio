import ToggleSwitch from "../ui/Buttons/ToggleSwitch";
function Language() {
  return (
    <div className="bg-light-gray rounded-lg h-12 flex items-center justify-center space-x-4 ">
      <p>EN</p>
      <ToggleSwitch />
      <p>FR</p>
    </div>
  );
}

export default Language;
