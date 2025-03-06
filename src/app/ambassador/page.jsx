import React from 'react';
import Hero from "@/components/student/Hero";
import AchieveGreat from '@/components/student/AchieveGreat';
import Adam from '@/components/student/Adam';
import LeadershipSuccess from '@/components/student/LeadershipSuccess';
import SatFeedbackWithRange from '@/components/student/SatFeedbackWithRange';


export default function Page() {
  return (
    <div>
      <Hero />
      <LeadershipSuccess />
      <AchieveGreat/>
      <Adam /> 
    </div>
  );
} 