"use client"
import React from 'react'
import  HeroSection from "@/components/upsell/HeroSection";
import PricingSection from "@/components/upsell/PricingSection";
import  SecondSection from "@/components/upsell/SecondSection";
import TimerSection  from "@/components/upsell/TimerSection";
import  SatFeedbackSlider  from "@/components/upsell/SatFeedbackSlider";
import hiyuPicture from "@/app/assets/hiyuPicture.png";
import ringLogo from "@/app/assets/ringLogo.png";

const page = () => {
  const feedbacks = [
    {
      picture: hiyuPicture,
      name: "Hiyu",
      from: "1260",
      till: "1520",
      before: "I chosed",
      bold: "College Mastermind's",
      after: "Full Test Prep program right off the bat. I knew I needed the test-taking skills because I wanted to have the best score possible for top colleges.",
      before2: null,
      bold2: null,
      after2: "College Mastermind's tutors helped me boil down the SAT to a science (especially the English section!) and enabled me to achieve a score that I am proud of. My score now accurately reflects my academic abilities and is competitive among top universities."
    },
    {
      picture: ringLogo,
      name: "Ken",
      from: null,
      till: null,
      before: "Our advisor and the team have provided exceptional coaching for our son, going far beyond typical",
      bold: "college preparation.",
      after: "They focus on developing strategic thinking and valuable life skills, which have already made a noticeable difference.",
      before2: null,
      bold2: null,
      after2: "What's truly remarkable is their ability to engage him in meaningful conversations, effectively communicating important life lessons that we, as parents, had struggled to convey. There is no way we could have made our son study that hard and achieve great results in SAT!"
    }
  ]


  return (
    <div>
      <HeroSection />
      <SecondSection />
      <TimerSection />
      <PricingSection />
      <SatFeedbackSlider feedbacks={feedbacks}/>
    </div>
  );
}

export default page;
