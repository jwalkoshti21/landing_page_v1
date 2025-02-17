import { Logo } from "../components/logo";
import { NavBar } from "../components/nav-bar";

const Header = () => {
  return (
    <div className="wrapper py-8 px-24">
      <div className="internal-wrapper bg-neutral-0 flex flex-row justify-between items-center">
        {/* LOGO */}
        <Logo />
        {/* NavBar */}
        <NavBar />
      </div>
      </div>
  );
};

export default Header;
