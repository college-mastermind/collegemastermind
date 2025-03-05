import React from 'react'
import SolidPlan from '@/components/student/SolidPlan'
import ParentHero from '@/components/parent/ParentHero'
import ChildStruggle from '@/components/parent/ChildStruggle'
import ParentGoogleForm from '@/components/parent/ParentGoogleForm'
import TestimonialAndVideo from '@/components/student/TestimonialAndVideo'
import StudentScore from "@/components/student/StudentScore"


export default function page() { 
  return (
    <div>
      <ParentHero />
      <StudentScore />
      <ChildStruggle />
      <SolidPlan />
      <TestimonialAndVideo />
      <ParentGoogleForm />
    </div>
  )
}
