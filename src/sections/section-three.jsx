import { Assets } from "../assets/assets";

const SectionThree = () => {
  const gridData = [
    {
      id: 0,
      name: "John’s Story",
      image: Assets.i1,
      description:
        "Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh ",
    },
    {
      id: 1,
      name: "The Journey",
      image: Assets.i2,
      description:
        "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
    },
    {
      id: 2,
      name: "Catch Day",
      image: Assets.i3,
      description:
        "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
    },
    {
      id: 3,
      name: "Trout Tales",
      image: Assets.i4,
      description:
        "Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Volutpat commodo sed",
    },
  ];

  return (
    <div className="wrapper py-40 lg:py-80 px-24 gap-24 flex flex-col">
      {/* TITLE */}
      <div className="internal-wrapper">
        <div className="w-full font-default font-semibold text-headingDefault sm:text-headingMedium leading-[45px] sm:leading-[54px] text-neutral-90">
          Member stories
        </div>
      </div>
      {/* MOBILE VIEW */}
      <div className="internal-wrapper bg-neutral-0 flex flex-col gap-[32px] xs:hidden">
        <div className="w-full h-[1px] bg-neutral-20 sm:hidden" />
          {gridData.map((data, index) => {
            return (
              <div key={data?.id}>
                <div className="flex flex-col justify-start items-start gap-16">
                  <div className="flex flex-col justify-start items-start gap-4">
                  <div className="font-alternate font-normal text-neutral-90 text-headingSmall leading-[48px]">
                    {data.name}
                  </div>
                  <div className="flex flex-row justify-center items-start gap-16">
                    <div className="w-full max-w-[100px] ">
                      <img src={data.image} />
                    </div>
                    <p className="font-default font-normal text-neutral-60 text-bodyDefault leading-[24px]">
                      {data.description}
                    </p>
                  </div>
                  </div>
                  <span className="cursor-pointer flex justify-center items-center text-bodyDefault leading-[24px] text-neutral-90 gap-[8px] px-[11.5785px] py-[7px] rounded-[4px] border border-neutral-40 hover:bg-neutral-5 ">
                    Read more
                  </span>
                </div>
                {index != gridData.length - 1 && (
                  <div className="w-full h-[1px] bg-neutral-20 block sm:hidden mt-32" />
                )}
              </div>
            );
          })}
        <div className="w-full h-[1px] bg-neutral-20 sm:hidden" />
      </div>
      
      {/*END MOBILE VIEW */}
      {/* DESKTOP VIEW */}
      <div className="internal-wrapper bg-neutral-0  flex-col sm:gap-[32px] hidden xs:flex">
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-[12px] lg:gap-[48px]">
            {gridData.map((data) => {
              return (
                <div
                  key={data?.id}
                  className="flex flex-row justify-start items-start"
                >
                  <div className="w-full max-w-[200px] lg:min-w-[200px]">
                    <img src={data.image} />
                  </div>
                  <div className="flex flex-col px-24 justify-start items-start gap-16">
                    <div className="flex flex-col gap-4">
                      <div className="font-alternate font-normal text-neutral-90 text-headingSmall leading-[48px] text-nowrap ">
                        {data.name}
                      </div>
                      <p className="font-default font-normal text-neutral-60 text-bodySmall leading-[21px]">
                        {data.description}
                      </p>
                    </div>
                    <span className="cursor-pointer px-8 py-4 bg-neutral-10 text-bodySmall leading-[21px] rounded-[4px] text-neutral-90 gap-8 hover:bg-neutral-5">
                      Read more
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
      </div>
      {/* DESKTOP VIEW */}
    </div>
  );
};

export default SectionThree;
