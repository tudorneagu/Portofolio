function Nav() {
  return (
    <ul className="flex flex-grow-1 gap-10 list-none">
      <li className="hover:drop-shadow-3xl hover:font-bold  inline-bloc transition-all min-w-[70px]  cursor-pointer">
        Home
      </li>
      <li className="hover:drop-shadow-3xl hover:font-bold  inline-bloc transition-all min-w-[70px]  cursor-pointer">
        About
      </li>
      <li className="hover:drop-shadow-3xl hover:font-bold  inline-bloc transition-all min-w-[70px]  cursor-pointer">
        Stack
      </li>
      <li className="hover:drop-shadow-3xl hover:font-bold  inline-block transition-all min-w-[70px] cursor-pointer">
        Projects
      </li>
      <li className="hover:drop-shadow-3xl hover:font-bold  inline-bloc transition-all min-w-[70px]  cursor-pointer">
        Contact
      </li>
    </ul>
  );
}

export default Nav;
