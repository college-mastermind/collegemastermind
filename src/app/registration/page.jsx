"use client";
import { textGradient, blueGradient } from "@/TailwindStyles/TailwindStyles";
import Image from "next/image";
import { useState } from "react";
import LockImage from "/public/graphics/lock.png";
import { useRouter } from "next/navigation";

const RegistrationPage = () => {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const goToForm = () => {
    if (code == "104" || code == "105") {
      router.push(
        "https://forms.zohopublic.com/exclusiveprivatetutoring/form/SATChallengeRegistrationJanuary/formperma/NXO75GOVUuOb_Zt0OQ2-b-9pz4UstuMdTAPqqu6J70I"
      );
    } else {
      setError("Oops, Code Does Not Match!");
    }
  };

  return (
    <div className="min-h-[90vh] flex px-[10%]  ">
      <div className="my-auto flex flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-[60%] flex flex-col">
          <h1
            className={`text-4xl xs:text-5xl sm:text-6xl mb-6 pb-2 text-center md:text-left font-bold ${textGradient}`}
          >
            Enter Your Registration Code
          </h1>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="py-4 text-xl px-8 rounded-xl border-[2px] border-blueSecondary w-full sm:w-[60%] mx-auto md:mx-0"
          ></input>
          {error && (
            <p className="text-lg my-2 text-center md:text-left font-semibold text-[#ff0000]">
              {error}
            </p>
          )}
          <button
            onClick={() => goToForm()}
            className={`mt-4 text-center text-white text-xl font-semibold py-4 px-12 rounded-lg mr-auto ml-auto md:ml-0 ${blueGradient}`}
          >
            Submit
          </button>
        </div>
        <div className="w-full md:w-[50%] flex">
          <Image
            src={LockImage}
            alt=""
            className="w-[300px] md:w-[70%] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
