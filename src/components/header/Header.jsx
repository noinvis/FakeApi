import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-slate-900">
      <nav className=" flex h-[90px] items-center justify-center">
        <ul className="flex gap-[3rem] text-white">
          <li>
            <NavLink className="text-[28px]" to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink className="text-[28px]" to={"/usermain"}>Users</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
