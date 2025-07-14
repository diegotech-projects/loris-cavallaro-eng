import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { ReviewData } from '@/data/content';

function Reviews() {
  const t = useTranslations('reviews');
  const reviewData = ReviewData();

  return (
    <div className="container-custom">
      {/* Header */}
      <div className="mb-20 text-center">
        <h2 className="mb-6 text-4xl font-bold tracking-tight text-themeTextPrimary lg:text-5xl xl:text-6xl">
          {t('title')}
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-themeTextSecondary">
          {t('description')}
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reviewData.map((review) => (
          <div
            key={review.name}
            className="bg-themeSurface p-8 transition-colors duration-300 hover:bg-themeSurfaceLight"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="size-12 overflow-hidden rounded-full grayscale">
                <Image
                  width={300}
                  height={300}
                  src={review.profile}
                  alt={review.name}
                  className="size-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold tracking-wide text-themeTextPrimary">
                  {review.name.toUpperCase()}
                </h3>
                <p className="text-sm tracking-wide text-themeTextSecondary">
                  {review.occupation}
                </p>
              </div>
            </div>
            <blockquote className="leading-relaxed text-themeTextSecondary">
              &ldquo;{review.review}&rdquo;
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
