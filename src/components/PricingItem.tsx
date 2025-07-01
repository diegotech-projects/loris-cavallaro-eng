import type { FC } from 'react';
import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { MdArrowForward } from 'react-icons/md';

import ButtonPrimary from '@/shared/Button/ButtonPrimary';

type PricingItemType = {
  pricingData: {
    name: string;
    priceMonthly: number;
    priceYearly: number;
    href: string;
    plans: string[];
  };
  timePlan: string;
  key: React.Key;
};

const PricingItem: FC<PricingItemType> = ({ pricingData, timePlan, key }) => {
  return (
    <div className="rounded-2xl border border-white/10 px-5 py-7" key={key}>
      <div className="text-center text-3xl font-medium">{pricingData.name}</div>
      <div className="mt-7 flex items-center gap-2">
        <div className="text-5xl font-semibold">
          $
          {timePlan === 'Monthly'
            ? pricingData.priceMonthly
            : pricingData.priceYearly}
        </div>
        <div className="text-sm text-neutral-400">
          {timePlan === 'Monthly' ? '/month' : '/year'}
        </div>
      </div>
      <div className="my-5 h-px bg-white/10" />
      <div className="mb-5 space-y-5">
        {pricingData.plans.map((plan) => (
          <div className="flex items-center gap-1" key={plan}>
            <AiOutlineCheckCircle /> {plan}
          </div>
        ))}
      </div>
      <ButtonPrimary
        className="flex w-full items-center gap-x-2 self-center"
        href={pricingData.href}
        sizeClass="py-3"
      >
        Get Started!
        <MdArrowForward />
      </ButtonPrimary>
    </div>
  );
};

export default PricingItem;
