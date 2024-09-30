function ToggleSwitch({}) {
  // useEffect(() => {
  //   localStorage.setItem("darkTheme", darkTheme);
  // }, [darkTheme]);
  return (
    <button
      className={`toggle-btn `}
      // onClick={() => setDarkTheme(!darkTheme)}
    >
      <div className="toggle-knob" />
    </button>
  );
}

export default ToggleSwitch;
