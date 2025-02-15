import { useState } from "react";
import { Assets } from "../assets/assets";

const SectionTwo = () => {
  const [selected, setSelected] = useState(0);
  const onSelectHandler = (id) => setSelected((i) => (i === id ? null : id));
  const accordionList = [
    {
      id: 0,
      name: "Explore Fly Fishing",
      image: Assets.s2One,
      mobileImage: Assets.s2m1,
      description:
        "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
    },
    {
      id: 1,
      name: "Fly Fishing Experiences",
      image: Assets.s22,
      mobileImage: Assets.s2m2,
      description:
        "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
    },
    {
      id: 2,
      name: "Gear Up and Catch More",
      image: Assets.s23,
      mobileImage: Assets.s2m3,
      description:
        "In metus vulputate eu scelerisque felis imperdiet. Nunc scelerisque viverra mauris in aliquam sem. S",
    },
  ];

  return (
    <div className="bg-tan-lighter">
      <div className="internal-wrapper flex flex-col justify-start items-start py-40 xs:py-80 px-24 gap-24">
        {/* TITLE */}
        <div className="font-default font-semibold text-headingDefault xs:text-headingMedium leading-[45px] xs:leading-[54px] text-neutral-90">
          Featured options
        </div>
        {/* ACCORDION MOBILE*/}
        <div className="w-full flex flex-col gap-24 xs:hidden">
          {accordionList.map((ac) => {
            return (
              <div
                key={ac.id}
                className="relative w-full bg-cover bg-center flex flex-col items-center justify-center"
                style={{ backgroundImage: `url(${ac.mobileImage})` }}
              >
                {/* Content */}
                <div className="relative z-10 flex flex-col justify-start p-32 xs:p-24 gap-8 items-start w-full h-full">
                  <div className="font-default font-semibold text-[#1C1812] text-headingSmall leading-tight">
                    {ac.name}
                  </div>
                  <p className="font-default font-normal text-neutral-60 text-bodyMedium leading-[30px]">
                    {ac.description}
                  </p>
                  <span className="cursor-pointer px-12 xs:px-8 py-8 xs:py-4 bg-neutral-10 hover:bg-neutral-5 text-bodyDefault xs:text-bodySmall rounded-[4px] text-neutral-90 gap-8">
                    Learn more
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        {/* ACCORDION DESKTOP*/}
        <div className="w-full hidden xs:block">
          {accordionList.map((ac) => {
            const isSelected = ac.id === selected;
            return (
              <div key={ac.id} className="flex flex-col">
                <div
                  onClick={() => onSelectHandler(ac.id)}
                  className="flex flex-row justify-between items-center w-full border-b-[1px] border-neutral-40 py-8"
                >
                  <span className="font-default font-normal text-bodyMedium leading-[30px] text-center">
                    {ac.name}
                  </span>
                  <span className="inline-block transition-transform duration-300 h-[9px] w-[17px]">
                    <img
                      src={Assets.arrow}
                      alt="arrow"
                      className={`w-6 h-6 transform ${
                        isSelected ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </div>
                <div
                  className={`transition-max-height duration-1000 ease-in-out overflow-hidden ${
                    isSelected ? "max-h-[1000px]" : "max-h-0"
                  }`}
                  style={{ transitionProperty: "max-height" }}
                >
                  {isSelected && (
                    <div className="flex flex-row">
                      <div className="w-full max-w-[400px]">
                        <img src={ac.image} className="w-full object-cover h-full" />
                      </div>
                      <div className="flex flex-col justify-start p-24 gap-8 items-start">
                        <div className="font-default font-semibold text-[#1C1812] text-headingSmall leading-tight">
                          {ac.name}
                        </div>
                        <p className="font-default font-normal text-neutral-60 text-bodyMedium leading-[30px]">
                          {ac.description}
                        </p>
                        <span className="cursor-pointer px-8 py-4 bg-neutral-10 hover:bg-neutral-5 text-bodySmall rounded-[4px] text-neutral-90 gap-8">
                          Learn more
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
