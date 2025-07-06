import Image from 'next/image';

import { ReviewData } from '@/data/content';

function Reviews() {
  return (
    <div className="container-custom">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-themeTextPrimary mb-6 tracking-tight">
          TESTIMONIALS
        </h2>
        <p className="text-lg text-themeTextSecondary max-w-2xl mx-auto leading-relaxed">
          Le parole dei nostri clienti raccontano la qualità del nostro lavoro e l'impegno verso l'eccellenza.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {ReviewData.map((review) => (
          <div
            key={review.name}
            className="bg-themeSurface p-8 hover:bg-themeSurfaceLight transition-colors duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 overflow-hidden rounded-full grayscale">
                <Image
                  width={300}
                  height={300}
                  src={review.profile}
                  alt={review.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-themeTextPrimary tracking-wide">
                  {review.name.toUpperCase()}
                </h3>
                <p className="text-sm text-themeTextSecondary tracking-wide">
                  {review.occupation}
                </p>
              </div>
            </div>
            <blockquote className="text-themeTextSecondary leading-relaxed">
              "{review.review}"
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
