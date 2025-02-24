import React from 'react'
import Image from 'next/image'

const LeadershipSuccess = () => {
  return (
    <>
      <div>
      <div className="flex flex-col xl:flex-row">
        <div className="w-full xl:w-[1100px] flex flex-col items-center  justify-center xl:-mr-10 z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0 py-12">
          <div className="max-w-[730px] lg:pb-5">
            <div className="text-4xl sm:text-5xl lg:text-[58px] font-bold text-left text-[#5277FF] leading-tight pb-6 sm:pb-8 lg:pb-10">
              Real LeaderShip. <br />
              Real Success!
            </div>
            <div className="text-lg sm:text-xl lg:text-[24px] font-normal text-justify text-[#3F3F3F] leading-tight">
              <span className="font-bold">
                Admissions officers love to see students who lead successful and
                difficult projects.
              </span> {" "}
              Dare to do what most teens won’t even dream of, and get
              tangible proof that you’re the kind of leader top universities want.
            </div>
            <div className="mt-8 sm:mt-10">
              <div className="flex space-x-4 items-start">
                <Image
                  src="/tick_icon.svg"
                  width={19}
                  height={19}
                  alt="Tick Icon"
                  className="mt-1"
                />
                <div className="text-[#5D5D75] font-normal text-base sm:text-lg lg:text-[18px]">
                  Other students will show potential. Ambassadors show results.
                </div>
              </div>
              <div className="flex space-x-4 items-start mt-4">
                <Image
                  src="/tick_icon.svg"
                  width={19}
                  height={19}
                  alt="Tick Icon"
                  className="mt-1"
                />
                <div className="text-[#5D5D75] font-normal text-base sm:text-lg lg:text-[18px]">
                  As an Ambassador, you’ll know exactly what to write about in your
                  essays
                </div>
              </div>
              <div className="flex space-x-4 items-start mt-4">
                <Image
                  src="/tick_icon.svg"
                  width={19}
                  height={19}
                  alt="Tick Icon"
                  className="mt-1"
                />
                <div className="text-[#5D5D75] font-normal text-base sm:text-lg lg:text-[18px]">
                  Ambassadors get skills and experience that most people don’t get
                  until they are out of college.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-[650px] flex items-center justify-center py-12 xl:py-0">
          <Image
            src="/leadership_boy.svg"
            width={800}
            height={800}
            alt="Picture of the boy"
            className="z-0 max-w-[90%] lg:min-h-full"
            />
            </div>
      </div>
    </div>

    </>

  )
}

export default LeadershipSuccess

