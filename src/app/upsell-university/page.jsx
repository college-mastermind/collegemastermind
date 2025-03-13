"use client"
import React from 'react'
import HeroSection from "@/components/upsell-university/HeroSection";
import PricingSection from "@/components/upsell-university/PricingSection";
import SecondSection from "@/components/upsell-university/SecondSection";
import TimerSection  from "@/components/upsell-university/TimerSection";
import SatFeedbackSlider  from "@/components/upsell-university/SatFeedbackSlider";
import ringLogo from "@/app/assets/ringLogo.png";

const page = () => {
    const feedbacks = [
      {
        picture: ringLogo,
        name: "Kristy",
        from: null,
        till: null,
        before: null,
        bold: "College Mastermind",
        after: " filled - and went far beyond - a vital college admissions role that our student’s high school counselor was so inadequately able to fulfill. It is fair to say we likely would not have had the same admissions success without them.",
        before2: null,
        bold2: null,
        after2: "Our mentor provided deep strategic guidance, helping our student refine their application, strengthen weak areas, and develop an amazing project. Ultimately, our child applied Early Decision to their first-choice, reach school - and was overjoyed to receive an acceptance."
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
      },
      {
        picture: ringLogo,
        name: "Steve",
        from: null,
        till: null,
        before: "Being from France, I felt completely out of my element when it came to college masterminds. ",
        bold: "We chose the top package, and it was a huge decision to invest in our child's future. ",
        after: "Observing the remarkable growth and transformation in him made it a truly worthwhile endeavor.",
        before2: null,
        bold2: "College Mastermind",
        after2: "didn't just prepare our son for college - they transformed his confidence, structure, and ability to face challenges head-on. We trusted them wholeheartedly, and they never let us down. Take the leap of faith; you won't be disappointed."
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
