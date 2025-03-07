"use client"
import { useState } from "react";

const PricingSection = () => {
  const CardsData = [
    {
      id: 1,
      addOn: "Add-On",
      price: "20",
      heading: "Recordings",
      ribbon: "Priceless",
      text: "Get the recordings of your free sessions so that you can go back to them again and again.",
      bg: "bg-[#CCE5F6]",
      textColor: "text-[#5277FF]",
    },
    {
      id: 2,
      addOn: "72% off",
      price: "1450",
      heading: "35 Sessions",
      ribbon: "Save $2,050",
      text: "Get a FULL SAT course at a fraction of the cost.",
      bg: "bg-gradient-to-r from-[#447EF7] to-[#243DBC] text-transparent",
      textColor: "text-white",
    },
    {
      id: 3,
      addOn: "55% off",
      price: "450",
      heading: "4 Test Anxiety Sessions",
      ribbon: "Save $550",
      text: "Get a FULL SAT course at a fraction of the cost.",
      bg: "bg-[#CCE5F6]",
      textColor: "text-[#5277FF]",
    },
  ];

  const [isHovered, setIsHovered] = useState(false);

  const [pricingOption, setPricingOption] = useState();

  const priceHandling = (id) => {
    console.log(id);
  };
  const optionHandling = (id) => {
    return id === pricingOption;
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col mt-10 cursor-pointer mb-10 ">
        <div className="text-[44px] font-semibold bg-gradient-to-r from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text">
          Select Your Upgrade{" "}
        </div>
        <div className="text-[24px] font-semibold">And Save!</div>
      </div>
      <div className="w-full h-[434px] flex justify-center items-center flex-col sm:flex-row  space-x-8">
        {CardsData.map((e) => {
          return (
            <div
              key={e.id}
              className="group relative flex flex-col justify-center items-center space-y-4 h-[434px] w-[80%] sm:w-[250px] md:w-[320px] lg:w-[390px] px-10 rounded-md shadow-[0px_4px_24px_4px_rgba(82,119,255,0.2)] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:border-4 hover:border-[#447EF7]"
              onClick={() => {
                setPricingOption(e.id);
                priceHandling(e.id);
              }}
            >
              <label className="mr-[310px] mt-2 mb-[-20px]">
                <input
                  type="radio"
                  name="toggle"
                  value={e.id}
                  checked={optionHandling(e.id)}
                  onChange={() => {}}
                  className="h-4 w-4 cursor-pointer"
                />
              </label>

              <div
                className={`h-[55px] w-[150px] sm:w-[155px] md:w-[160px] lg:w-[166px] ${e.bg} flex justify-center items-center rounded`}
              >
                <p
                  className={`font-semibold text-[22px] sm:text-[24px] md:text-[28px] lg:text-[28px] ${e.textColor}`}
                >
                  {e.addOn}
                </p>
              </div>

              <div className="font-bold text-[54px] bg-gradient-to-r from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text leading-tight">
                ${e.price}{" "}
                <span className="font-bold text-[24px] bg-gradient-to-r from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text">
                  USD
                </span>
              </div>

              <div className="font-semibold text-[26px]">{e.heading}</div>

              {/* 🛠 FIX: Place `group-hover` on a direct child */}
              <div
                className="transition-all duration-300 ease-in-out flex justify-center items-center w-[400px] h-[46px] bg-[#CCE5F6] group-hover:ml-5"
                style={{
                  clipPath:
                    "polygon(90% 0%, 82% 54%, 90% 100%, 0 100%, 0% 50%, 0 0)",
                }}
              >
                <div className="text-center font-bold text-[24px] bg-gradient-to-r from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text">
                  {e.ribbon}
                </div>
              </div>

              <div className="flex justify-center items-center h-[100px]">
                <div className="font-semibold text-[19px] text-center">
                  {e.text}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-center mt-10 cursor-pointer ">
        <div className="flex justify-center items-center w-[205px] h-[56px] bg-[#447EF7] font-medium text-[20px] text-white rounded shadow-[0px_4px_16px_0px_rgba(14,63,242,0.24),inset_0px_2px_5px_0px_rgba(236,242,255,0.3)]">
          Buy Now
        </div>
      </div>
    </>
  );
};

export default PricingSection;