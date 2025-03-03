import React from 'react'
import StudentScore from '@/components/student/StudentScore'
import SolidPlan from '@/components/student/SolidPlan'
import TestimonialAndVideo from '@/components/student/TestimonialAndVideo'
import StudentHero from '@/components/student/StudentHero'
import GoogleForm from '@/components/student/GoogleForm'


export default function page() {
  return (
    <div> 
      <StudentHero />
      <StudentScore />
      <SolidPlan />
      <TestimonialAndVideo />
      <GoogleForm />
    </div>
  )
}
