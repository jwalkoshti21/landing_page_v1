import { useState } from "react";
import { Assets } from "../assets/assets";
import { mainNav } from "../data/routes";

export const NavBar = () => {
  const [selected, setSelected] = useState("/");

  const selectRouteHandler = (s) => {
    setSelected(s);
  };

  return (
    <>
      <div className="xs:hidden h-40 flex items-center justify-center">
        <img src={Assets.ham} alt="ham" className="h-[24px]" />
      </div>
      <div className="hidden xs:flex flex-row gap-6">
        {mainNav.map((nav, index) => {
          const isSelected = nav.url == selected;
          const selectedClass = "underline decoration-2 decoration-[#1C1812]";
          const notSelectedClass = "";
          return (
            <div
              onClick={() => selectRouteHandler(nav.url)}
              style={{
                textUnderlineOffset: "5px",
              }}
              className={`cursor-pointer font-default text-bodyDefault text-neutral-90 hover:underline decoration-2 hover:decoration-[#C6C5C3] ${
                isSelected ? selectedClass : notSelectedClass
              }`}
              key={index}
            >
              {nav.name}
            </div>
          );
        })}
      </div>
    </>
  );
};
