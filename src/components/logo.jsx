import { Assets } from "../assets/assets";

export const Logo = () => {
  return (
    <div className="flex flex-row gap-3 justify-center items-center">
      <img src={Assets.logo} alt="Logo" className="h-32 md:h-40" />
      <div className="font-alternate text-brown-default  text-bodyMedium leading-tight  hidden sm:block text-nowrap">
        Central Texas Fly Fishing
      </div>
    </div>
  );
};
