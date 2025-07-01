import Image from 'next/image';

import { ReviewData } from '@/data/content';

function Reviews() {
  return (
    <div className="container-custom">
      <div className="flex flex-col items-center gap-5">
        <div className="flex justify-center">
          <span className="bg-whiteTwo px-4 py-2 text-primary 2xl:text-xl">
            Testimonials
          </span>
        </div>
        <div className="flex items-center justify-center text-4xl font-bold text-primary 2xl:text-5xl">
          <p className="text-center md:w-[60%]">
            Here&apos;s What our Customers Have To Say
          </p>
        </div>
      </div>
      <div className="mt-20 grid gap-5 text-sm md:grid-cols-3 lg:gap-10 lg:text-base 2xl:gap-20">
        {ReviewData.map((review) => (
          <div
            key={review.name}
            className="flex flex-col gap-5 bg-whiteOne p-5 text-primary shadow-2xl shadow-primary/70 2xl:p-10"
          >
            <div className="flex items-center gap-10">
              <div className="h-12 w-12 overflow-hidden rounded-full 2xl:h-16 2xl:w-16">
                <Image
                  width={300}
                  height={300}
                  src={review.profile}
                  alt={review.name}
                  className="h-full w-full overflow-hidden object-cover"
                />
              </div>
              <div>
                <h1 className="font-semibold 2xl:text-xl">{review.name}</h1>
                <p className="text-sm tracking-wider text-gray-700 2xl:text-base">
                  {review.occupation}
                </p>
              </div>
            </div>
            <div className="">{review.review}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
