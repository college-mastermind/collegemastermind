import heroImage from "@/app/assets/hero.png";


const HeroSection = () => {
    return (
      <>
       <div className="relative w-full h-[360px] sm:h-[370px] md:h-[420px] lg:h-[440px] flex items-end justify-center text-center bg-cover bg-center" style={{ backgroundImage: `url(${heroImage.src})` }}>
        <div className='flex flex-col items-center justify-center text-center lg:pt-7'>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-1 sm:mb-4 md:mb-4 lg:mb-4 text-white text-center leading-relaxed">
            You Found Your Best Fit
            <br />
            <span className="mt-2 inline-block">University</span>
          </h1>

          <p className="px-4 block text-[17px] sm:text-[20px] md:text-[26px] lg:text-[28px]  text-white text-center mb-20 sm:mb-20 md:mb-20 lg:mb-24 font-normal">
            Now take the next steps to get in
          </p>
        </div>
      </div>

    </>

    )
  }

export default HeroSection;