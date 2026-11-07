import React from 'react';

import Appointment from '@/components/Contacts';
import ClosingCta from '@/components/landing/ClosingCta';
import IntroStatement from '@/components/landing/IntroStatement';
import LandingHero from '@/components/landing/LandingHero';
import LineShowcase from '@/components/landing/LineShowcase';
import LinesOverview from '@/components/landing/LinesOverview';
import VelocityMarquee from '@/components/landing/VelocityMarquee';
import WhyUs from '@/components/landing/WhyUs';
import { commercialLines } from '@/data/lines';

const Page = () => {
  return (
    <main className="relative bg-ink">
      <LandingHero />
      <VelocityMarquee />
      <IntroStatement />
      <LinesOverview />
      {commercialLines.map((line) => (
        <LineShowcase key={line.key} line={line} />
      ))}
      <WhyUs />
      <ClosingCta />

      <div className="scroll-mt-16 bg-themeSurface py-24" id="contatti">
        <Appointment />
      </div>
    </main>
  );
};

export default Page;
