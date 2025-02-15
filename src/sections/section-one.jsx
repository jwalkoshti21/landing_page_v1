import { Assets } from "../assets/assets";

const SectionOne = () => {
  return (
    <div className="internal-wrapper bg-neutral-0 flex flex-col-reverse xs:flex-row justify-between items-center px-0 py:0 xs:py-80 xs:px-24 gap-24">
      <div className="flex flex-col justify-start items-start px-24 xs:px-0 py-40 xs:py-24 gap-16 ">
        {/* Title Text */}
        <div className="font-default font-semibold text-headingDefault xs:text-headingLarge leading-[45px] xs:leading-[63px] text-neutral-90 text-wrap">
          Central Texas <br /> Fly Fishing
        </div>
        {/* Text Description */}
        <p className="font-default text-bodyMedium leading-[30px] text-neutral-60">
          At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
          cursus vestibulum, facilisi ac, sed faucibus.
        </p>
        <span className="cursor-pointer px-12 py-8 bg-[#514432] hover:bg-brown-light rounded-[4px] text-neutral-0 gap-8 text-bodyDefault">
          {"Get started"}
        </span>
      </div>
      {/* Image */}
      <div className="h-[500px] w-full xs:h-[300px] xs:max-w-[400px]">
        <img
          src={Assets.sectionOneImage}
          className="object-cover hidden xs:block xs:h-[300px] xs:w-[400px]"
        />
        <img
          src={Assets.sectionOneMobileImage}
          className="object-cover w-full h-[500px] block xs:hidden "
        />
      </div>
    </div>
  );
};

export default SectionOne;
