import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <ul className="flex flex-grow-1 gap-10 list-none">
      <NavLink
        to={`/`}
        className={({ isActive }) =>
          isActive
            ? "font-bold drop-shadow-3xl active:drop-shadow-3xl active:font-bold inline-block transition-all min-w-[70px] cursor-pointer"
            : "active:drop-shadow-3xl active:font-bold inline-block transition-all min-w-[70px] cursor-pointer"
        }>
        Home
      </NavLink>
      <NavLink
        to={`/about`}
        className={({ isActive }) =>
          isActive
            ? "font-bold drop-shadow-3xl active:drop-shadow-3xl active:font-bold inline-block transition-all min-w-[70px] cursor-pointer"
            : "active:drop-shadow-3xl active:font-bold inline-block transition-all min-w-[70px] cursor-pointer"
        }>
        About
      </NavLink>
      <NavLink
        to={`/stack`}
        className={({ isActive }) =>
          isActive
            ? "font-bold drop-shadow-3xl active:drop-shadow-3xl active:font-bold inline-block transition-all min-w-[70px] cursor-pointer"
            : "active:drop-shadow-3xl active:font-bold inline-block transition-all min-w-[70px] cursor-pointer"
        }>
        Stack
      </NavLink>
      <NavLink
        to={`/projects`}
        className={({ isActive }) =>
          isActive
            ? "font-bold drop-shadow-3xl active:drop-shadow-3xl active:font-bold inline-block transition-all min-w-[70px] cursor-pointer"
            : "active:drop-shadow-3xl active:font-bold inline-block transition-all min-w-[70px] cursor-pointer"
        }>
        Projects
      </NavLink>
      <NavLink
        to={`/contact`}
        className={({ isActive }) =>
          isActive
            ? "font-bold drop-shadow-3xl active:drop-shadow-3xl active:font-bold inline-block transition-all min-w-[70px] cursor-pointer"
            : "active:drop-shadow-3xl active:font-bold inline-block transition-all min-w-[70px] cursor-pointer"
        }>
        Contact
      </NavLink>
    </ul>
  );
}

export default Nav;
