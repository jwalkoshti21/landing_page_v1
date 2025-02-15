import { Assets } from "../assets/assets";
import { footerNav } from "../data/routes";

const Footer = () => {
  return (
    <div className="bg-neutral-90 w-full">
      <div className="internal-wrapper p-24 flex flex-col gap-[36px]">
        <div className="flex flex-col gap-8 xs:gap-0 xs:flex-row justify-between items-center w-full">
          {/* LOGO */}
          <div className="flex flex-col xs:flex-row justify-start items-center gap-8 xs:gap-24">
            <img src={Assets.footerLogo} alt="Logo" className="h-40" />
            <div className="flex flex-row gap-24">
              {footerNav.map((nav, index) => {
                return (
                  <div
                    style={{
                      textUnderlineOffset: "2px",
                    }}
                    className={`cursor-pointer font-default text-bodyDefault text-neutral-5`}
                    key={index}
                  >
                    {nav.name}
                  </div>
                );
              })}
            </div>
          </div>
          {/*  FOOTER ICONS */}
          <div className="flex flex-row gap-8">
            <div className="w-full min-w-[40px] min-h-[40px] flex justify-center items-center">
              <img src={Assets.fb} />
            </div>
            <div className="w-full min-w-[40px] min-h-[40px] flex justify-center items-center">
              <img src={Assets.insta} />
            </div>
            <div className="w-full min-w-[40px] min-h-[40px] flex justify-center items-center">
              <img src={Assets.lkn} />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center w-full font-default text-bodyCaption text-neutral-30">
          {"© 2024 Central Texas Fly Fishing All Rights Reserved."}
        </div>
      </div>
    </div>
  );
};

export default Footer;
