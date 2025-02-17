import { Assets } from "../assets/assets";

const SectionOne = () => {
  return (
    <div className="wrapper px-0 py:0 md:py-80 md:px-24">
    <div className="internal-wrapper bg-neutral-0 flex flex-col-reverse md:flex-row justify-between items-center gap-0 md:gap-24">
      <div className="flex flex-col justify-start items-start px-6 sm:px-6 md:px-0 py-40 sm:py-5 md:py-24 gap-16 ">
        {/* Title Text */}
        <div className="font-default font-semibold text-headingDefault md:text-headingLarge leading-[45px] md:leading-[63px] text-neutral-90 text-wrap">
          Central Texas <br /> Fly Fishing
        </div>
        {/* Text Description */}
        <p className="font-default text-bodyMedium leading-[30px] text-neutral-60">
          At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
          cursus vestibulum, facilisi ac, sed faucibus.
        </p>
        <span className="cursor-pointer px-12 py-8 bg-brown-default hover:bg-brown-light rounded-[4px] text-neutral-5 gap-8 text-bodyDefault leading-6 text-center">
          {"Get started"}
        </span>
      </div>
      {/* Image */}
      <div className="h-[500px] w-full md:h-[300px] md:max-w-[400px]">
        <img
          src={Assets.sectionOneImage}
          className="object-cover hidden md:block md:h-[300px] md:w-[400px]"
        />
        <img
          src={Assets.sectionOneMobileImage}
          className="object-cover w-full h-[500px] block md:hidden "
        />
      </div>
    </div>
    </div>
  );
};

export default SectionOne;
