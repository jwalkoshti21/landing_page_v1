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
    <div className="internal-wrapper bg-neutral-0 flex flex-col py-40 xs:py-80 px-24 gap-24">
      {/* TITLE */}
      <div className="font-default font-semibold text-headingDefault xs:text-headingMedium leading-[54px] text-neutral-90">
        Member stories
      </div>
      {/* MOBILE VIEW */}
      <div className="w-full h-[1px] bg-neutral-20 block xs:hidden" />
      <div className="block xs:hidden">
        {gridData.map((data, index) => {
          return (
            <div key={data?.id}>
              <div className="flex flex-col justify-start items-start gap-16">
                <div className="font-alternate font-normal text-neutral-90 text-headingSmall leading-tight">
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
                <span className="cursor-pointer flex justify-center items-center text-bodyDefault text-neutral-90 gap-[8px] px-12 py-8 rounded-[4px] border border-neutral-40 hover:bg-neutral-5 ">
                  Read more
                </span>
              </div>
              {index != gridData.length - 1 && (
                <div className="w-full h-[1px] bg-neutral-20 block xs:hidden my-32" />
              )}
            </div>
          );
        })}
      </div>
      <div className="w-full h-[1px] bg-neutral-20 block xs:hidden" />
      {/*END MOBILE VIEW */}
      {/* DESKTOP VIEW */}
      <div className="hidden xs:block py-8 px-4">
        <div className="grid grid-cols-2 gap-[48px]">
          {gridData.map((data) => {
            return (
              <div
                key={data?.id}
                className="flex flex-row justify-start items-start"
              >
                <div className="w-full max-w-[200px] ">
                  <img src={data.image} />
                </div>
                <div className="flex flex-col px-24 justify-start items-start gap-16">
                  <div className="flex flex-col gap-4">
                    <div className="font-alternate font-normal text-neutral-90 text-headingSmall leading-tight">
                      {data.name}
                    </div>
                    <p className="font-default font-normal text-neutral-60 text-bodySmall leading-tight">
                      {data.description}
                    </p>
                  </div>
                  <span className="cursor-pointer px-8 py-4 bg-neutral-10 text-bodySmall rounded-[4px] text-neutral-90 gap-8 hover:bg-neutral-5">
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
