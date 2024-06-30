import InputField from "./InputField";
import TypeNormalSize48StateDe from "./TypeNormalSize48StateDe";
import Type from "./Type";
import PropTypes from "prop-types";

const GroupComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`absolute h-[76.06%] top-[21.03%] bottom-[2.92%] left-[calc(50%_-_592px)] w-[71.938rem] text-left text-[0.925rem] text-gray-900 font-abel ${className}`}
    >
      <img
        className="absolute h-[98.47%] w-[100.96%] top-[-5.33%] right-[-1.74%] bottom-[6.87%] left-[0.78%] rounded-31xl max-w-full overflow-hidden max-h-full mix-blend-soft-light"
        alt=""
        src="/rectangle-1.svg"
      />
      <img
        className="absolute h-[87.1%] w-[88.17%] top-[0%] right-[5.06%] bottom-[12.9%] left-[6.78%] rounded-xs-1 max-w-full overflow-hidden max-h-full"
        alt=""
        src="/background.svg"
      />
      <div className="absolute h-[12.75%] w-[81.71%] top-[67.61%] right-[9.77%] bottom-[19.64%] left-[8.52%] bg-gray1-100 flex flex-row items-start justify-start gap-[1.387rem] text-[1rem] font-button-big-bold">
        <InputField label="Zip code" placeholder="Ex. 73923" />
        <InputField label="City" placeholder="Ex. New York" />
      </div>
      <div className="absolute h-[12.75%] w-[81.71%] top-[51.08%] right-[9.77%] bottom-[36.16%] left-[8.52%] bg-gray1-100 flex flex-col items-start justify-start gap-[0.462rem]">
        <div className="self-stretch relative tracking-[0.01em] leading-[165%]">
          Billing address
        </div>
        <div className="self-stretch rounded-xs-1 bg-base-50 flex flex-row items-center justify-start py-[0.637rem] pr-[0.693rem] pl-[0.925rem] gap-[0.693rem] text-gray-500 border-[0.9px] border-solid border-gray-200">
          <div className="flex-1 relative tracking-[0.01em] leading-[165%]">
            United States
          </div>
          <img
            className="w-[1.156rem] relative h-[1.156rem]"
            alt=""
            src="/vuesaxboldarrowdown.svg"
          />
        </div>
      </div>
      <TypeNormalSize48StateDe
        label="Card holder name"
        placeholder="Ex. Jane Cooper"
        typeNormalSize48StateDeWidth="80.89%"
        typeNormalSize48StateDeGap="0.462rem"
        typeNormalSize48StateDePosition="absolute"
        typeNormalSize48StateDeHeight="12.71%"
        typeNormalSize48StateDeTop="32.39%"
        typeNormalSize48StateDeRight="10.69%"
        typeNormalSize48StateDeBottom="54.89%"
        typeNormalSize48StateDeLeft="8.43%"
        typeNormalSize48StateDeBackgroundColor="rgba(255, 255, 255, 0)"
      />
      <div className="absolute h-[13.45%] w-[81.71%] top-[15.54%] right-[9.77%] bottom-[71.01%] left-[8.52%] bg-gray1-100 flex flex-col items-start justify-start gap-[0.462rem]">
        <div className="self-stretch relative tracking-[0.01em] leading-[165%]">
          Payment method
        </div>
        <Type />
      </div>
      <div className="absolute h-[4.55%] w-[81.71%] top-[2.65%] right-[9.77%] bottom-[92.8%] left-[8.52%] bg-gray1-100 flex flex-row items-center justify-between text-[1.038rem]">
        <div className="relative tracking-[0.01em] leading-[165%]">Payment</div>
        <img
          className="w-[1.156rem] relative h-[1.156rem]"
          alt=""
          src="/vuesaxlineararrowup.svg"
        />
      </div>
      <div className="absolute h-[0.12%] w-[88.25%] top-[9.91%] right-[6.5%] bottom-[89.97%] left-[5.26%] box-border border-t-[0.9px] border-solid border-gray-200" />
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent1;
