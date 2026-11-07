import React from 'react';

import Appointment from '@/components/Contacts';
import ClosingCta from '@/components/landing/ClosingCta';
import IntroStatement from '@/components/landing/IntroStatement';
import LandingHero from '@/components/landing/LandingHero';
import LandingShell from '@/components/landing/LandingShell';
import LineShowcase from '@/components/landing/LineShowcase';
import LinesOverview from '@/components/landing/LinesOverview';
import TechnicalDrawing from '@/components/landing/TechnicalDrawing';
import WhyUs from '@/components/landing/WhyUs';
import { commercialLines } from '@/data/lines';

const Page = () => {
  return (
    <LandingShell>
      <main className="relative bg-ink">
        <LandingHero />
        <IntroStatement />
        <TechnicalDrawing />
        <LinesOverview />
        {commercialLines.map((line) => (
          <LineShowcase key={line.key} line={line} />
        ))}
        <WhyUs />
        <ClosingCta />

        <div className="scroll-mt-16 bg-ink py-24 md:py-40" id="contatti">
          <Appointment />
        </div>
      </main>
    </LandingShell>
  );
};

export default Page;
