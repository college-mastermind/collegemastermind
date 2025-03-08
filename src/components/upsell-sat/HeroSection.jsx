import heroImage from "@/app/assets/hero.png";


const HeroSection = () => {
    return (
      <>
        <div className="relative w-full h-[360px] sm:h-[370px] md:h-[420px] lg:h-[440px] flex items-end justify-center text-center bg-cover bg-center" style={{ backgroundImage: `url(${heroImage.src})` }}>
          <div className='flex flex-col items-center justify-center text-center lg:pt-7'>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-1 sm:mb-4 md:mb-6 text-white text-center ">
              Check the SAT Off Your
              <br /> Admissions To-Do List
            </h1>
            <p className="px-4 block text-[13px] sm:text-[17px] md:text-[18px] lg:text-[20px] lg:font-normal text-white text-center mb-20 sm:mb-20 md:mb-20 lg:mb-24 font-normal">
              Master the SAT with everything you need to
              <span className="inline sm:hidden"> </span>
              <br className="block" />
              get to 1500+, no matter what your starting score
            </p>
          </div>
        </div>
  
      </>
    )
  }

export default HeroSection;