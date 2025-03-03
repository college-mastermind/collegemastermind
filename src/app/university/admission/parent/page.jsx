import React from 'react'
import HeroSection from '@/components/UniversityAdmissionPage/parent/HeroSection'
import TopChoices from '@/components/UniversityAdmissionPage/student/TopChoices'
import ChooseUniversities from '@/components/UniversityAdmissionPage/student/ChooseUniversities'
import StudentFeedback from '@/components/UniversityAdmissionPage/student/StudentFeedback'
import VideoAndText from '@/components/UniversityAdmissionPage/student/VideoAndText'
import StudentForm from '@/components/UniversityAdmissionPage/student/StudentForm'
import ChildNeeds from '@/components/UniversityAdmissionPage/parent/ChildNeed'


export default function page() {
  const boldText = "Let us help your child get in too!";
  const plainText = " Acceptance rates don't have to be a barrier when your child choose the right universities."
  const lastText = "Finding a great university for your child means exploring options they haven't even considered."
  return (
    <div>
      <HeroSection />
      <TopChoices boldText={boldText} plainText={plainText}/>
      <ChooseUniversities lastText={lastText}/>
      <ChildNeeds />
      <StudentFeedback />
      <StudentForm />
      <VideoAndText />
    </div>
  )
}
