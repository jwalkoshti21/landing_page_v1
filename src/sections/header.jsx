import { Logo } from "../components/logo";
import { NavBar } from "../components/nav-bar";

const Header = () => {
  return (
    <div className="internal-wrapper bg-neutral-0 flex flex-row justify-between items-center px-6 py-8">
      {/* LOGO */}
      <Logo />
      {/* NavBar */}
      <NavBar />
    </div>
  );
};

export default Header;
