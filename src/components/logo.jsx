import { Assets } from "../assets/assets";

export const Logo = () => {
  return (
    <div className="flex flex-row gap-2 justify-center items-center">
      <img src={Assets.logo} alt="Logo" className="h-32 xs:h-40" />
      <div className="font-alternate text-[#514432] text-bodyMedium mt-4 ml-3 hidden xs:block">
        Central Texas Fly Fishing
      </div>
    </div>
  );
};
