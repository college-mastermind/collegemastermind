import React from 'react'
import SolidPlan from '@/components/student/SolidPlan'
import ParentHero from '@/components/parent/ParentHero'
import ChildStruggle from '@/components/parent/ChildStruggle'
import ParentGoogleForm from '@/components/parent/ParentGoogleForm'
import TestimonialAndVideo from '@/components/student/TestimonialAndVideo'
import StudentScore from "@/components/student/StudentScore"


export default function page() {
  const Heading1 = "The SAT Doesn't Have to"
  const Heading2 = "Be Stressful!"
  const plainText = "If your child is a “bad test taker,” it may be tempting to allow them to just apply test-optional. You need to understand that this is never in their best interest."
  const pointText = "Applying test optional makes your child less competitive against other applicants." 
  const boldText = "Let us help your child get there too!"

  return (
    <div>
      <ParentHero />
      <StudentScore boldText={boldText}/>
      <ChildStruggle Heading1={Heading1} Heading2={Heading2} plainText={plainText} pointText={pointText}/>
      <SolidPlan />
      <TestimonialAndVideo />
      <ParentGoogleForm />
    </div>
  )
}
