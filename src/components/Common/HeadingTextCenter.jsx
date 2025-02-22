import { textGradient } from "@/TailwindStyles/TailwindStyles";

const HeadingtextCenter = ({ text }) => {
  return (
    <div className="  py-16 flex w-full">
      <h2
        className={`${textGradient} text-4xl md:text-[52px] pb-4 font-bold text-center mx-auto md:leading-[60px] lg:px-[10%]`}
      >
        {text}
      </h2>
    </div>
  );
};

export default HeadingtextCenter;
