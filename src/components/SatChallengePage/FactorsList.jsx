import { shadowMain } from "@/TailwindStyles/TailwindStyles";

const SingleFactor = ({ title, description }) => {
  return (
    <div className="w-full ss:w-[50%] md:w-[25%] p-4">
      <div
        className={`${shadowMain} rounded-lg bg-white flex flex-col gap-2 text-center p-6 h-full`}
      >
        <h3 className="text-2xl font-bold text-blueSecondary min-h-[60px]">
          {title}
        </h3>
        <p className="text-lg font-medium">{description}</p>
      </div>
    </div>
  );
};

const FactorsList = () => {
  return (
    <div className="py-10   flex flex-wrap items-stretch">
      <SingleFactor
        title={"Lessons that Work!"}
        description={
          "Our curriculum was created by a graduate of Johns Hopkins University, and it gets results. 86% of our clients last year got a score in the top 5%!"
        }
      />
      <SingleFactor
        title={"Real Proctored Exams"}
        description={
          "Every Saturday, you'll sit for a real, timed SAT exam. Receive instant feedback with our automated score calculator, so no need to wait for your results."
        }
      />
      <SingleFactor
        title={"Get the Attention You Need"}
        description={
          "Ask unlimited questions in our special breakout rooms and access our extensive library of video solutions to the assignments."
        }
      />
      <SingleFactor
        title={"Complete Support"}
        description={
          "Nobody is successful alone. You will be amazed with the tracking, accountability, and support you receive."
        }
      />
    </div>
  );
};

export default FactorsList;
