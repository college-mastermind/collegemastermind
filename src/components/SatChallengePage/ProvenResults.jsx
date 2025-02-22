import Image from "next/image";
import GirlImage from "/public/graphics/happy-girl-1.png";
import { textGradient } from "@/TailwindStyles/TailwindStyles";
import CheckTickIcon from "/public/icons/check-icon.svg";

const SingleListItem = ({ text }) => {
  return (
    <div className="flex flex-row gap-2">
      <Image
        src={CheckTickIcon}
        alt=""
        className="w-[30px] h-[30px] object-contain rounded-full shadow-[0px_14px_34px_0px_#0208351a]"
      />
      <p className="text-xl font-medium">{text} </p>
    </div>
  );
};

const ProvenResults = () => {
  return (
    <div className="mb-10 flex flex-col md:flex-row gap-10 md:gap-0 items-center">
      <div className="md:w-[40%] flex">
        <Image
          src={GirlImage}
          alt=""
          className="mr-auto w-full xs:w-[70%] md:w-[90%] lg:w-[85%] ml-auto md:ml-0"
        />
      </div>
      <div className="md:w-[60%] flex flex-col gap-4">
        <h2
          className={`${textGradient} text-5xl font-bold text-center md:text-left`}
        >
          Proven Results
        </h2>
        <div className=" flex flex-col gap-4">
          <SingleListItem text={"100% of students increased their scores"} />
          <SingleListItem
            text={"90% of students improved their scores every week"}
          />
          <SingleListItem
            text={
              "Average of 130 point increase, with many surpassing 200 and 300 points."
            }
          />
          <SingleListItem
            text={"Several students reached or exceeded scores of 1500"}
          />
          <SingleListItem
            text={
              "All students who did 90% or more of their homework assignments got scores of 1480 or higher!"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ProvenResults;
