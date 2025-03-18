"use client"
import { useState, useEffect } from "react";

const calulateDiscountedPrice = (originalPrice, discountRate) => {
  if (discountRate <= 0 || discountRate > 99) return originalPrice;
  const discountedPrice = originalPrice - (originalPrice / 100 * discountRate)
  return Math.floor(discountedPrice);
}

const PricingSection = ({ SAT_Timer }) => {
  const CardsData = [
    {
      id: 1,
      addOn: "55%",
      price: "$450",
      heading: "Application Strategy Session",
      ribbon: "Save $550",
      text: `Get the recordings of your free sessions AND approach applications with a specific plan and strategy to increase chances of acceptance.`,
      bg: "bg-[#CCE5F6]",
      textColor: "text-[#5277FF]",
      originalPrice: 1000,
       discountRate: SAT_Timer ? 28 : 55,
    },
    {
      id: 2,
      addOn: "7% off",
      price: "Save Big",
      heading: "on ANY package",
      ribbon: "Book a Call Now",
      text: "Full College Admissions Support at a discount. An expert will help you choose the right package.",
      bg: "bg-[#CCE5F6]",
      textColor: "text-[#5277FF]",
      originalPrice: 1000,
       discountRate: SAT_Timer ? 28 : 55,
    },
    {
      id: 3,
      addOn: "55% off",
      price: "$450",
      heading: "Demonstrated Interest Strategy",
      ribbon: "Save $550",
      text: `Get the recordings of your free sessions, AND learn a way to increase a college’s interest in your application, even BEFORE applying.`,
      bg: "bg-[#CCE5F6]",
      textColor: "text-[#5277FF]",
      originalPrice: 1000,
       discountRate: SAT_Timer ? 28 : 55,
    }
  ];


 const [clientId, setClientId] = useState()
   const [selectedOptions, setSelectedOptions] = useState([]);
 
 
   useEffect(() => {
     setClientId(window.affiliateId)
   },[])
   const toggleSelection = (id) => {
     setSelectedOptions((prev) =>
       prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
     );
   };
 
 
   const handleBuyNow = async () => {
     if (selectedOptions.length === 0) {
       alert("Please select at least one card.");
     }

 
     let pricesData = []
 
     for (let i = 0; i < selectedOptions.length; i++) {
       let obj = CardsData.find((e) => e.id === selectedOptions[i]);

       pricesData.push({
         ...obj, discountedPrice: calulateDiscountedPrice(obj.originalPrice, obj.discountRate)
       })
     }

  
 
     try {
       const res = await fetch("/api/sessions", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
           pricesData,
           clientId: window.affiliateId,
         }),
       });
 
       const session = await res.json();
       window.location.href = session.url;
 
     } catch (error) {
       console.log(error) // TODO: MODAL
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
                className={`h-[55px] w-[150px] sm:w-[155px] md:w-[160px] lg:w-[166px] ${e.bg} flex justify-center items-center rounded`}
              >
                <p
                  className={`font-semibold text-[22px] sm:text-[24px] md:text-[28px] lg:text-[28px] ${e.textColor}`}
                >
                  {e?.discountRate}%
                </p>
              </div>

              <div className={
                `rounded-md px-4 py-2 font-bold text-[40px] sm:text-[45px] md:text-[50px] lg:text-[54px] leading-tight
                  ${e.id === 2
                  ? "text-white bg-gradient-to-b from-[#447EF7] to-[#243DBC]"
                  : "bg-gradient-to-r from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text"} 
                  `}  >
                ${calulateDiscountedPrice(e.originalPrice, e.discountRate)}{" "} <span className={`font-bold text-[24px] bg-gradient-to-r from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text`}  >{e.id === 2 ? "" : "USD"}</span>
              </div>

              <div className="font-semibold text-[26px] text-center">{e.heading}</div>

              {/* 🛠 FIX: Place `group-hover` on a direct child */}
              <div
                className="transition-all duration-300 ease-in-out flex justify-center items-center  w-[300px] sm:w-[400px] md:w-[398px] lg:w-[400px] h-[46px] bg-[#CCE5F6] group-hover:ml-0 lg:group-hover:ml-5"
                style={{
                  clipPath:
                    "polygon(90% 0%, 82% 54%, 90% 100%, 0 100%, 0% 50%, 0 0)",
                }}
              >
                <div className="text-center font-bold text-[24px] bg-gradient-to-r from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text">
                  {e.ribbon}
                </div>
              </div>

              <div className="flex justify-center items-start h-[120px] mb-4">
                <div className="font-semibold text-[14px] sm:text-[14px] md:text-[14px] lg:text-[16px] text-center">
                  {e.text}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-center mt-16 cursor-pointer mb-20" onClick={handleBuyNow}>
        <div className="flex justify-center items-center w-[205px] h-[56px] bg-[#447EF7] font-medium text-[20px] text-white rounded shadow-[0px_4px_16px_0px_rgba(14,63,242,0.24),inset_0px_2px_5px_0px_rgba(236,242,255,0.3)]">
          Buy Now
        </div>
      </div>
    </>
  );
};

export default PricingSection;