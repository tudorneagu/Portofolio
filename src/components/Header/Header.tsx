import Language from "./Language";
import Logo from "../Logo";
import Nav from "./Nav";

function Header() {
  return (
    <header className="flex  justify-between items-start items-center py-5 px-20  bg-bg-light ">
      <div className="flex items-center gap-1 heading-s">
        <Logo />
        <p className="animate-blink">|</p>
      </div>
      <Nav />
      <Language />
    </header>
  );
}

export default Header;
