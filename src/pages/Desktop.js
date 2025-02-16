import Property1Default from "../components/Property1Default";

const Desktop = () => {
  return (
    <div className="w-full relative h-[64rem] overflow-hidden bg-[url('/public/desktop--4@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-[4.375rem] text-darkgoldenrod-200 font-dm-serif-display">
      <img
        className="absolute top-[44.688rem] left-[35.688rem] w-[15.75rem] h-[17.063rem] overflow-hidden opacity-[0.4]"
        alt=""
        src="/tabla.svg"
      />
      <div className="absolute top-[13.438rem] left-[6.375rem] inline-block w-[55.625rem] h-[23.375rem] [mix-blend-mode:linear-burn]">
        <span>{`Transform Your Passion into Performance: Explore Hindustani Music with `}</span>
        <span className="text-[4.5rem] font-dm-serif-text">Salman Usmani</span>
      </div>
      <div className="absolute top-[0rem] left-[calc(50%_-_0px)] w-[40.625rem] h-[7.75rem] flex flex-row items-start justify-start">
        <Property1Default
          pageTitle="Home"
          property1DefaultWidth="8.125rem"
          property1DefaultBorderBottom="5px solid #7b5c0f"
          property1DefaultPadding="0.625rem"
          property1DefaultHeight="7.75rem"
        />
        <Property1Default
          pageTitle="About"
          property1DefaultWidth="8.125rem"
          property1DefaultBorderBottom="unset"
          property1DefaultPadding="0.625rem"
          property1DefaultHeight="7.813rem"
        />
        <Property1Default
          pageTitle="courses"
          property1DefaultWidth="8.125rem"
          property1DefaultBorderBottom="unset"
          property1DefaultPadding="0.625rem"
          property1DefaultHeight="7.813rem"
        />
        <Property1Default
          pageTitle="reviews"
          property1DefaultWidth="8.125rem"
          property1DefaultBorderBottom="unset"
          property1DefaultPadding="0.625rem"
          property1DefaultHeight="7.813rem"
        />
        <Property1Default
          pageTitle="Contact"
          property1DefaultWidth="8.125rem"
          property1DefaultBorderBottom="unset"
          property1DefaultPadding="0.625rem"
          property1DefaultHeight="7.813rem"
        />
      </div>
      <div className="absolute top-[40.688rem] left-[7.813rem] text-[2.25rem] font-light font-karma text-saddlebrown-900 inline-block w-[29.313rem] h-[3.313rem]">
        Book your free demo today!
      </div>
      <div className="absolute top-[1.688rem] left-[0rem] text-[2rem] leading-[2.5rem] font-moul text-center flex items-center w-[18.125rem] h-[4.375rem] text-darkgoldenrod-100">
        <span className="w-full">
          <span> SUR</span>
          <span className="text-black">Raag</span>
        </span>
      </div>
      <div className="absolute top-[48.894rem] left-[10rem] w-[14.313rem] h-[4.231rem] text-center text-[1.625rem] text-base-50">
        <div className="absolute top-[0rem] left-[0rem] rounded-tl-xl rounded-tr-none rounded-br-xl rounded-bl-none bg-saddlebrown-900 w-[14.313rem] h-[4.231rem]" />
        <div className="absolute top-[0.844rem] left-[4.613rem] inline-block w-[5.094rem] h-[2.331rem]">
          Enroll
        </div>
      </div>
      <img
        className="absolute top-[36rem] left-[45rem] rounded-[40px] w-[42.5rem] h-[25.75rem] object-cover"
        alt=""
        src="/image-1@2x.png"
      />
      <div className="absolute top-[7.813rem] left-[63.875rem] w-[21.75rem] h-[25.75rem] flex flex-row items-start justify-start p-[0.625rem] box-border">
        <img
          className="w-[22.563rem] relative rounded-[100px] h-[26.563rem] object-cover"
          alt=""
          src="/image-2@2x.png"
        />
      </div>
    </div>
  );
};

export default Desktop;
