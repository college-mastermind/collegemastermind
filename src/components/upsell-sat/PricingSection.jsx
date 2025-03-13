"use client"
import { useState } from "react";


const calulateDiscountedPrice = (originalPrice, discountRate) => {
  if (discountRate <= 0 || discountRate > 99) return originalPrice;
  const discountedPrice = originalPrice - (originalPrice / 100 * discountRate)
  return Math.floor(discountedPrice);
}

const PricingSection = ({ SAT_Timer }) => {
  const CardsData = [
    {
      id: 1,
      addOn: "Add-On",
      heading: "Recordings",
      ribbon: "Priceless",
      text: "Get the recordings of your free sessions so that you can go back to them again and again.",
      bg: "bg-[#CCE5F6]",
      textColor: "text-[#5277FF]",
      originalPrice: 20,
      discountRate: 0,
    },
    {
      id: 2,
      heading: "35 Sessions",
      ribbon: "Save $2,050",
      text: "Get a FULL SAT course at a fraction of the cost.",
      bg: "bg-gradient-to-r from-[#447EF7] to-[#243DBC] text-transparent",
      textColor: "text-white",
      originalPrice: 5250,
      discountRate: SAT_Timer ? 35 : 72,
    },
    {
      id: 3,
      heading: "4 Test Anxiety Sessions",
      ribbon: "Save $550",
      text: "Get a FULL SAT course at a fraction of the cost.",
      bg: "bg-[#CCE5F6]",
      textColor: "text-[#5277FF]",
      originalPrice: 1000,
      discountRate: SAT_Timer ? 28 : 55,
    },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleSelection = (id) => {
    setSelectedOptions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleBuyNow = async () => {
    if (selectedOptions.length === 0) {
      alert("Please select at least one card.");
    }
    console.log("Selected Card IDs:", selectedOptions);

    let pricesData = []

    for (let i = 0; i < selectedOptions.length; i++) {
      let obj = CardsData.find((e) => e.id === selectedOptions[i]);
      pricesData.push({
        ...obj, discountedPrice: calulateDiscountedPrice(originalPrice, discountRate)
      })
    }

    console.log(pricesData)

    console.log("window.affiliateId")
    // console.log(window.affiliateId)

    try {
      const res = await fetch("/api/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pricesData,
          clientId: window.affiliateId || "",
        }),
      });

      const session = await res.json();
      console.log(session)
      window.location.href = session.url;
 
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col mt-10 cursor-pointer mb-10 ">
        <div className="text-center text-[30px] sm:text-[44px] font-semibold bg-gradient-to-r from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text">
          Select Your Upgrade{" "}
        </div>
        <div className="text-[24px] font-semibold">And Save!</div>
      </div>
      <div className="w-full h-auto lg:h-[434px] flex justify-center items-center flex-col lg:flex-row lg:space-x-8 space-y-4">
        {CardsData.map((e) => {
          return (
            <div
              key={e.id}
              className={`group relative flex flex-col justify-center items-center ${e.id === 2 ? "space-y-[26px]" : "space-y-3"
                } h-[434px] w-[310px] sm:w-[400px] lg:w-[390px] px-10 rounded-md shadow-[0px_4px_24px_4px_rgba(82,119,255,0.2)] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:border-4 hover:border-[#447EF7]
              }`}
              onClick={() => toggleSelection(e.id)}
            >
              <label className="mr-[210px] sm:mr-[260px] lg:mr-[310px] mt-2 mb-[-8px] sm:mb-[-12px] lg:mb-[-20px]">
                <input
                  type="radio"
                  value={e.id}
                  checked={selectedOptions.includes(e.id)}
                  onChange={() => { }}
                  className="h-4 w-4 cursor-pointer"
                />
              </label>

              <div
                className={`h-[55px] w-[150px] sm:w-[155px] md:w-[160px] lg:w-[166px] ${e?.bg} flex justify-center items-center rounded`}
              >
                <p
                  className={`font-semibold text-[22px] sm:text-[24px] md:text-[28px] lg:text-[28px] ${e?.textColor}`}
                >
                  {e.id === 1 ? "Add-On" : `${e?.discountRate}%`}
                </p>
              </div>

              <div className="font-bold text-[45px] sm:text-[54px] bg-gradient-to-r from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text leading-tight">
                ${calulateDiscountedPrice(e.originalPrice, e.discountRate)}{" "}
                <span className="font-bold text-[24px] bg-gradient-to-r from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text">
                  USD
                </span>
              </div>

              <div className="font-semibold text-[26px] text-center">{e?.heading}</div>

              {/* 🛠 FIX: Place `group-hover` on a direct child */}
              <div
                className="transition-all duration-300 ease-in-out flex justify-center items-center  w-[300px] sm:w-[400px] md:w-[398px] lg:w-[400px] h-[46px] bg-[#CCE5F6] group-hover:ml-0 lg:group-hover:ml-5"
                style={{
                  clipPath:
                    "polygon(90% 0%, 82% 54%, 90% 100%, 0 100%, 0% 50%, 0 0)",
                }}
              >
                <div className="text-center font-bold text-[24px] bg-gradient-to-r from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text">
                  {e?.ribbon}
                </div>
              </div>

              <div className="flex justify-center items-center h-[100px]">
                <div className="font-semibold text-[19px] text-center">
                  {e?.text}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-center mt-16 cursor-pointer  mb-20 " onClick={handleBuyNow}>
        <div className="flex justify-center items-center w-[205px] h-[56px] bg-[#447EF7] font-medium text-[20px] text-white rounded shadow-[0px_4px_16px_0px_rgba(14,63,242,0.24),inset_0px_2px_5px_0px_rgba(236,242,255,0.3)]">
          Buy Now
        </div>
      </div>
    </>
  );
};

export default PricingSection;