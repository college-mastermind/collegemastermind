import Image from "next/image";

import { textGradient, shadowMain } from "@/TailwindStyles/TailwindStyles";
import Image1 from "/public/graphics/boy-hand.png";
import Image2 from "/public/graphics/boys-handshake.png";
import Image3 from "/public/graphics/girl-happy.png";

const SingleCard = ({ image, title, description }) => {
  return (
    <div className="w-full sm:w-[33.33%] p-4">
      <div
        className={`h-full bg-white flex flex-col rounded-2xl ${shadowMain} p-4 pb-8`}
      >
        <Image
          src={image}
          alt=""
          className="w-full h-[320px] object-cover rounded-xl"
        />
        <h3
          className={`${textGradient} text-[26px] mt-4 font-bold text-center w-full`}
        >
          {title}
        </h3>
        <p className="text-lg text-center mt-6">{description}</p>
      </div>
    </div>
  );
};

const WhatToExpect = () => {
  return (
    <div className="py-10">
      <h2
        className={`${textGradient} text-center text-4xl md:text-5xl pb-2 font-bold w-full`}
      >
        What to Expect
      </h2>
      <div className="flex flex-wrap mt-6">
        <SingleCard
          image={Image1}
          title={"We'll Be the “Bad Guy”"}
          description={
            "Teens are grumpy, but we're not afraid! Your child will get the tough love, honest advice, and support they need to stay on track and get results (without it having to come from you)."
          }
        />
        <SingleCard
          image={Image2}
          title={"Tons of Personal Attention"}
          description={
            "You can have all the time you want to get your questions answered or add your input, because we only work with a limited number of student each year."
          }
        />
        <SingleCard
          image={Image3}
          title={"Lots of Options"}
          description={
            "When admissions are done right, you end up with many great options. We offer dedicated decision calls to help out students make their final choices."
          }
        />
      </div>
    </div>
  );
};

export default WhatToExpect;
