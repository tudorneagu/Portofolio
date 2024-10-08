import Language from "./Language";
import Logo from "../Logo";
import Nav from "./Nav";

function Header({
  langFr,
  setLangFr,
}: {
  langFr: boolean;
  setLangFr: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <header className="flex  justify-between  items-center py-5 lg:py-5 px-4 lg:px-20  bg-bg-light z-30 ">
      <div className="flex items-center gap-1 lg:heading-s">
        <Logo />
        <p className=" text-l-regular animate-blink">|</p>
      </div>
      <Nav langFr={langFr} setLangFr={setLangFr} />

      <Language langFr={langFr} setLangFr={setLangFr} />
    </header>
  );
}

export default Header;
