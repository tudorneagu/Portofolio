import { useTranslation } from "react-i18next";
function ToggleSwitch({
  langFr,
  setLangFr,
}: {
  langFr: boolean;
  setLangFr: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { i18n } = useTranslation();
  const toggleLanguage = () => {
    setLangFr(!langFr);
    if (langFr) {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("fr");
    }
  };

  return (
    <button
      className={`toggle-btn ${langFr ? "active" : ""}`}
      onClick={toggleLanguage}>
      <div className="toggle-knob" />
    </button>
  );
}

export default ToggleSwitch;
