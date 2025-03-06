import React from 'react'
import StudentScore from '@/components/student/StudentScore'
import SolidPlan from '@/components/student/SolidPlan'
import TestimonialAndVideo from '@/components/student/TestimonialAndVideo'
import StudentHero from '@/components/student/StudentHero'
import GoogleForm from '@/components/student/GoogleForm'
import ChildStruggle from '@/components/parent/ChildStruggle'


export default function page() {

  const Heading1 = "The SAT Doesn't Have to"
  const Heading2 = "Be Stressful!"
  const plainText = "If you are a “bad test taker,” it may be tempting to just apply test-optional. You need to understand that this is not a good idea, especially if you want a more selective college."
  const pointText = "Applying test optional makes you less competitive against other applicants."
  const boldText = "Let us show you how to get there!"

  return (
    <div> 
      <StudentHero /> 
      <StudentScore boldText={boldText}/>
      <ChildStruggle Heading1={Heading1} Heading2={Heading2} plainText={plainText} pointText={pointText}/>
      <SolidPlan />
      <TestimonialAndVideo />
      <GoogleForm />
    </div>
  )
}
