import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Nav() {
  const { t } = useTranslation();
  return (
    <ul className="flex flex-grow-1 gap-10 list-none">
      <NavLink
        to={`/`}
        className={({ isActive }) =>
          isActive
            ? "font-bold drop-shadow-3xl active:drop-shadow-3xl active:font-bold inline-block transition-all min-w-[70px] cursor-pointer text-center"
            : "active:drop-shadow-3xl active:font-bold inline-block transition-all min-w-[70px] cursor-pointer text-center focus:border-b-2 focus:outline-none focus:border-medium"
        }>
        {t("nav_home")}
      </NavLink>
      <NavLink
        to={`/about`}
        className={({ isActive }) =>
          isActive
            ? "font-bold drop-shadow-3xl active:drop-shadow-3xl active:font-bold inline-block transition-all min-w-[70px] cursor-pointer text-center"
            : "active:drop-shadow-3xl active:font-bold inline-block transition-all min-w-[70px] cursor-pointer text-center focus:border-b-2 focus:outline-none focus:border-medium"
        }>
        {t("nav_about")}
      </NavLink>
      <NavLink
        to={`/stack`}
        className={({ isActive }) =>
          isActive
            ? "font-bold drop-shadow-3xl active:drop-shadow-3xl active:font-bold inline-block transition-all min-w-[70px] cursor-pointer text-center"
            : "active:drop-shadow-3xl active:font-bold inline-block transition-all min-w-[70px] cursor-pointer text-center focus:border-b-2 focus:outline-none focus:border-medium"
        }>
        {t("nav_stack")}
      </NavLink>
      <NavLink
        to={`/projects`}
        className={({ isActive }) =>
          isActive
            ? "font-bold drop-shadow-3xl active:drop-shadow-3xl active:font-bold inline-block transition-all min-w-[70px] cursor-pointer text-center"
            : "active:drop-shadow-3xl active:font-bold inline-block transition-all min-w-[70px] cursor-pointer focus:border-b-2 focus:outline-none focus:border-medium text-center  "
        }>
        {t("nav_projects")}
      </NavLink>
      <NavLink
        to={`/contact`}
        className={({ isActive }) =>
          isActive
            ? "font-bold drop-shadow-3xl active:drop-shadow-3xl active:font-bold inline-block transition-all min-w-[70px] cursor-pointer text-center"
            : "active:drop-shadow-3xl active:font-bold inline-block transition-all min-w-[70px] cursor-pointer text-center focus:border-b-2 focus:outline-none focus:border-medium"
        }>
        {t("nav_contact")}
      </NavLink>
    </ul>
  );
}

export default Nav;
