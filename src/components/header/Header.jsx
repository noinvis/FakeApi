import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-slate-900">
      <nav className="flex gap-[3rem] h-[90px] items-center justify-center text-white">
        <NavLink className="text-[28px]" to={"/"}>Home</NavLink>
        <NavLink className="text-[28px]" to={"/usermain"}>Users</NavLink>
      </nav>
    </header>
  );
};

export default Header;
