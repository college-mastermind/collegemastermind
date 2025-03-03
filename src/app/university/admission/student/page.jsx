import React from 'react'
import HeroSection from '@/components/UniversityAdmissionPage/student/HeroSection'
import TopChoices from '@/components/UniversityAdmissionPage/student/TopChoices'
import ChooseUniversities from '@/components/UniversityAdmissionPage/student/ChooseUniversities'
import RightSchool from '@/components/UniversityAdmissionPage/student/RightSchool'
import StudentFeedback from '@/components/UniversityAdmissionPage/student/StudentFeedback'
import VideoAndText from '@/components/UniversityAdmissionPage/student/VideoAndText'
import StudentForm from '@/components/UniversityAdmissionPage/student/StudentForm'


export default function page() {
  const boldText = "Let us help you get in too!";
  const plainText = "Acceptance rates are no barrier when you choose the right universities that align with your values and personality."
  const lastText = "You'll find your best university by exploring places you haven't even considered."
  return (
    <div>
      <HeroSection />
      <TopChoices boldText={boldText} plainText={plainText}/>
      <ChooseUniversities lastText={lastText}/>
      <RightSchool />
      <StudentFeedback />
      <StudentForm />
      <VideoAndText />
    </div>
  )
}
