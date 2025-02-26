import React from 'react'
import SolidPlan from '@/components/student/SolidPlan'
import ParentHero from '@/components/parent/ParentHero'
import ChildStruggle from '@/components/parent/ChildStruggle'
import ParentGoogleForm from '@/components/parent/ParentGoogleForm'


export default function page() {
  return (
    <div>
      <ParentHero />
      <ChildStruggle />
      <SolidPlan />
      <ParentGoogleForm />
    </div>
  )
}
