import { Link } from "react-router-dom";

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
    <header className="flex  justify-between  items-center py-5 lg:py-5 px-10 lg:px-20  bg-bg-light z-30 ">
      <Link to={`/`} className="flex items-center gap-1 lg:heading-s">
        <Logo />

        <p className=" text-l-regular animate-blink">|</p>
      </Link>
      <Nav langFr={langFr} setLangFr={setLangFr} />
      <div className="hidden lg:block">
        <Language langFr={langFr} setLangFr={setLangFr} />
      </div>
    </header>
  );
}

export default Header;
