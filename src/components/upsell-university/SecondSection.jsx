import scholar_vector from "@/app/assets/scholar_vector.svg"
import stat_vector from "@/app/assets/stat_vector.svg"
import brain_vector from "@/app/assets/brain_vector.svg"
import Image from 'next/image';



const SecondSection = () => {
    return (
      <>
  
  
  <div className='flex w-full h-fit md:h-[276px] flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0 justify-center items-center mt-10' >
        <div className='w-[95%] md:w-[410px] h-fit b md:h-[210px] flex flex-col justify-center items-center shadow-[0_2px_6px_0_rgba(0,0,0,0.2)] px-4 md:px-8 py-6' >{/* Reduced px for smaller screens */}
          <div
            className="bg-[#E4E2DF] shrink-0 grow-0 rounded-full p-4 w-[64px] h-[64px] flex justify-center items-center mt-4 mb-2"
            style={{
              position: "relative",
              borderRadius: "50%",
              background: "#E4E2DF",
            }}
          >
            <div
              style={{
                content: '""',
                position: "absolute",
                inset: 0,
                padding: "3px",
                borderRadius: "50%",
                background: "linear-gradient(to left, #447EF7, #243DBC)",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
            <Image
              src={scholar_vector}
              width={30}
              height={20}
              className=""
            />
          </div>

          <div className=" text-center font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px]] mb-4 ">
            Stand out from the competition to increase your chances of getting
                      accepted into your dream university.
          </div>
        </div>

        <div className='w-[95%] md:w-[410px] h-fit md:h-[210px] flex flex-col justify-center items-center shadow-[0_2px_6px_0_rgba(0,0,0,0.2)] px-5 md:px-10 py-8' >

          <div
            className="bg-[#E4E2DF] shrink-0 grow-0 rounded-full p-4 w-[64px] h-[64px] flex justify-center items-center mt-4 mb-2"
            style={{
              position: "relative",
              borderRadius: "50%",
              background: "#E4E2DF",
            }}
          >
            <div
              style={{
                content: '""',
                position: "absolute",
                inset: 0,
                padding: "3px",
                borderRadius: "50%",
                background: "linear-gradient(to left, #447EF7, #243DBC)",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
            <Image
              src={stat_vector}
              width={30}
              height={20}
              className=""
            />
          </div>
          <div className=" text-center font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px]mb-4 ">
            Join the <span className="font-bold">90%</span> of <span className=" font-bold bg-gradient-to-r from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text"> College Mastermind </span>
            students who get into one of their
            top 3 choices.

          </div>
        </div>

        <div className='w-[95%] md:w-[410px] h-fit md:h-[210px] flex flex-col justify-center items-center shadow-[0_2px_6px_0_rgba(0,0,0,0.2)] px-4 md:px-8 rounded-md ' >
          <div
            className="bg-[#E4E2DF] shrink-0 grow-0 rounded-full p-4 w-[64px] h-[64px] flex justify-center items-center mt-4 mb-2"
            style={{
              position: "relative",
              borderRadius: "50%",
              background: "#E4E2DF",
            }}
          >
            {/* Gradient Border Effect */}
            <div
              style={{
                content: '""',
                position: "absolute",
                inset: 0,
                padding: "3px",
                borderRadius: "50%",
                background: "linear-gradient(to left, #447EF7, #243DBC)",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
            <Image
              src={brain_vector}
              width={30}
              height={20}
              className=""
            />
          </div>

          <div className=" text-center font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] mb-4 ">
            Get the support and strategy you need to
            reduce admissions confusion and stress,
            and understand what actually works.
          </div>
        </div>
      </div>
      </>
    )
  }

  export default SecondSection;