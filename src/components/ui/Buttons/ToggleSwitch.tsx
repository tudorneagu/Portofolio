function ToggleSwitch({
  langFr,
  setLangFr,
}: {
  langFr: boolean;
  setLangFr: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // useEffect(() => {
  //   localStorage.setItem("darkTheme", darkTheme);
  // }, [darkTheme]);
  return (
    <button
      className={`toggle-btn ${langFr ? "active" : ""}`}
      onClick={() => setLangFr(!langFr)}>
      <div className="toggle-knob" />
    </button>
  );
}

export default ToggleSwitch;
