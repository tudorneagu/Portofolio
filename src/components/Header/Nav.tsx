import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Language from "./Language";

function Nav({
  langFr,
  setLangFr,
}: {
  langFr: boolean;
  setLangFr: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative">
      {/* Burger Icon for mobile */}
      <div className="lg:hidden flex items-center justify-between">
        <button
          onClick={toggleMenu}
          className="text-xl  focus:outline-none"
          aria-label="Toggle navigation">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="absolute z-10 -right-10  w-screen top-10">
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } lg:hidden flex flex-col gap-10 bg-bg-light justify-around  py-9 border-b border-medium`}>
          <NavLink
            onClick={() => {
              setIsOpen(false);
            }}
            to={`/`}
            className={({ isActive }) =>
              isActive
                ? "text-xl-bold  drop-shadow-3xl active:drop-shadow-3xl active:text-xl-bold  transition-all min-w-[70px] cursor-pointer text-center"
                : "active:drop-shadow-3xl active:text-xl-bold  transition-all min-w-[70px] cursor-pointer text-center text-xl-regular focus:border-b-2 focus:outline-none focus:border-medium"
            }>
            {t("nav_home")}
          </NavLink>
          <NavLink
            onClick={() => {
              setIsOpen(false);
            }}
            to={`/about`}
            className={({ isActive }) =>
              isActive
                ? "text-xl-bold drop-shadow-3xl active:drop-shadow-3xl active:text-xl-bold  transition-all min-w-[70px] cursor-pointer text-center"
                : "active:drop-shadow-3xl active:text-xl-bold  transition-all min-w-[70px] cursor-pointer text-center text-xl-regular focus:border-b-2 focus:outline-none focus:border-medium"
            }>
            {t("nav_about")}
          </NavLink>

          <NavLink
            onClick={() => {
              setIsOpen(false);
            }}
            to={`/projects`}
            className={({ isActive }) =>
              isActive
                ? "text-xl-bold drop-shadow-3xl active:drop-shadow-3xl active:text-xl-bold  transition-all min-w-[70px] cursor-pointer text-center"
                : "active:drop-shadow-3xl active:text-xl-bold  transition-all min-w-[70px] cursor-pointer text-center text-xl-regular focus:border-b-2 focus:outline-none focus:border-medium"
            }>
            {t("nav_projects")}
          </NavLink>
          <NavLink
            onClick={() => {
              setIsOpen(false);
            }}
            to={`/contact`}
            className={({ isActive }) =>
              isActive
                ? "text-xl-bold drop-shadow-3xl active:drop-shadow-3xl active:text-xl-bold  transition-all min-w-[70px] cursor-pointer text-center"
                : "active:drop-shadow-3xl active:text-xl-bold  transition-all min-w-[70px] cursor-pointer text-center text-xl-regular focus:border-b-2 focus:outline-none focus:border-medium"
            }>
            {t("nav_contact")}
          </NavLink>
          <div className="mt-5">
            <Language langFr={langFr} setLangFr={setLangFr} />
          </div>
        </ul>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-10">
        <NavLink
          onClick={() => {
            setIsOpen(false);
          }}
          to={`/`}
          className={({ isActive }) =>
            isActive
              ? "font-bold drop-shadow-3xl active:drop-shadow-3xl active:font-bold  transition-all min-w-[70px] cursor-pointer text-center"
              : "active:drop-shadow-3xl active:font-bold  transition-all min-w-[70px] cursor-pointer text-center focus:border-b-2 focus:outline-none focus:border-medium"
          }>
          {t("nav_home")}
        </NavLink>
        <NavLink
          to={`/about`}
          className={({ isActive }) =>
            isActive
              ? "font-bold drop-shadow-3xl active:drop-shadow-3xl active:font-bold  transition-all min-w-[70px] cursor-pointer text-center"
              : "active:drop-shadow-3xl active:font-bold  transition-all min-w-[70px] cursor-pointer text-center focus:border-b-2 focus:outline-none focus:border-medium"
          }>
          {t("nav_about")}
        </NavLink>
        <NavLink
          onClick={() => {
            setIsOpen(false);
          }}
          to={`/stack`}
          className={({ isActive }) =>
            isActive
              ? "font-bold drop-shadow-3xl active:drop-shadow-3xl active:font-bold  transition-all min-w-[70px] cursor-pointer text-center"
              : "active:drop-shadow-3xl active:font-bold  transition-all min-w-[70px] cursor-pointer text-center focus:border-b-2 focus:outline-none focus:border-medium"
          }>
          {t("nav_stack")}
        </NavLink>
        <NavLink
          onClick={() => {
            setIsOpen(false);
          }}
          to={`/projects`}
          className={({ isActive }) =>
            isActive
              ? "font-bold drop-shadow-3xl active:drop-shadow-3xl active:font-bold  transition-all min-w-[70px] cursor-pointer text-center"
              : "active:drop-shadow-3xl active:font-bold  transition-all min-w-[70px] cursor-pointer focus:border-b-2 focus:outline-none focus:border-medium text-center  "
          }>
          {t("nav_projects")}
        </NavLink>
        <NavLink
          onClick={() => {
            setIsOpen(false);
          }}
          to={`/contact`}
          className={({ isActive }) =>
            isActive
              ? "font-bold drop-shadow-3xl active:drop-shadow-3xl active:font-bold  transition-all min-w-[70px] cursor-pointer text-center"
              : "active:drop-shadow-3xl active:font-bold  transition-all min-w-[70px] cursor-pointer text-center focus:border-b-2 focus:outline-none focus:border-medium"
          }>
          {t("nav_contact")}
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
