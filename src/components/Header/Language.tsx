import ToggleSwitch from "../ui/Buttons/ToggleSwitch";
function Language({
  langFr,
  setLangFr,
}: {
  langFr: boolean;
  setLangFr: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="hidden  bg-light-gray rounded-lg h-12 lg:flex items-center justify-center space-x-4  ">
      <p>En</p>
      <ToggleSwitch langFr={langFr} setLangFr={setLangFr} />
      <p>FR</p>
    </div>
  );
}

export default Language;
