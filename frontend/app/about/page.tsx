'use client';

import Link from 'next/link';
import Image from 'next/image';
import FrontendLayout from '../frontend/layout';
import LetDiscuss from '../frontend/components/home/LetDiscuss';
import AboutTop from '../frontend/components/about/aboutTop';
import VisionMission from '../frontend/components/about/VisionMission';
import Statistics from '../frontend/components/about/Statistics';

export default function AboutPage() {
  return (
    <FrontendLayout>

<AboutTop/>
<VisionMission/>
<Statistics/>

      <LetDiscuss />
    </FrontendLayout>
  );
}
