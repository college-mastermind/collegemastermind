import React from 'react'
import HeroSection from '@/components/UniversityAdmissionPage/student/HeroSection'
import TopChoices from '@/components/UniversityAdmissionPage/student/TopChoices'
import ChooseUniversities from '@/components/UniversityAdmissionPage/student/ChooseUniversities'
import RightSchool from '@/components/UniversityAdmissionPage/student/RightSchool'
import StudentFeedback from '@/components/UniversityAdmissionPage/student/StudentFeedback'
import VideoAndText from '@/components/UniversityAdmissionPage/student/VideoAndText'
import StudentForm from '@/components/UniversityAdmissionPage/student/StudentForm'


export default function page() {
  return (
    <div>
      <HeroSection />
      <TopChoices />
      <ChooseUniversities />
      <RightSchool />
      <StudentFeedback />
      <StudentForm />
      <VideoAndText />
    </div>
  )
}
