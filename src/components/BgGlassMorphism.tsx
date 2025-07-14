import type { FC } from 'react';

export interface BgGlassmorphismProps {
  className?: string;
}

const BgGlassmorphism: FC<BgGlassmorphismProps> = ({
  className = 'absolute inset-x-0 md:top-10 min-h-0 pl-20 2xl:pl-72 py-24 2xl:py-72 flex overflow-hidden z-0',
}) => {
  return (
    <div className={`nc-BgGlassmorphism ${className}`}>
      <span className="block size-72 rounded-full bg-[#ef233c] opacity-10 mix-blend-multiply blur-lg lg:size-96" />
      <span className="-ml-20 mt-40 block size-72 rounded-full bg-[#04868b] opacity-10 mix-blend-multiply blur-lg lg:size-96" />
    </div>
  );
};

export default BgGlassmorphism;
