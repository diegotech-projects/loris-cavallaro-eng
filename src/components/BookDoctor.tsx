import Image from 'next/image';

import { Doctors } from '@/data/content';

function BookDoctor() {
  return (
    <div className="container-custom">
      {/* Header Section */}
      <div className="text-center mb-16">
        <button className="bg-themeSurfaceLight text-themeTextSecondary px-6 py-3 rounded-full text-sm font-medium mb-6">
          Our Specialists
        </button>
        <div className="flex items-center justify-between">
          <h2 className="text-4xl lg:text-5xl font-bold text-themeTextPrimary">
            Most popular<br />specialists
          </h2>
          <div className="flex gap-4">
            <button className="bg-themeSecondary text-themeSurface px-6 py-3 rounded-lg font-medium hover:bg-themeAccent transition-colors">
              View more
            </button>
            <button className="border border-themeSurfaceLight text-themeTextSecondary px-6 py-3 rounded-lg font-medium hover:bg-themeSurfaceLight transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Specialists Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.keys(Doctors).slice(0, 4).map((doctor) => (
          <div key={Doctors[doctor].name} className="group">
            <div className="relative overflow-hidden rounded-lg bg-themeSurfaceLight aspect-square mb-4">
              <Image
                src={Doctors[doctor].image}
                alt={Doctors[doctor].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg text-themeTextPrimary mb-1">
                {Doctors[doctor].name}
              </h3>
              <p className="text-themeTextSecondary text-sm">
                {Doctors[doctor].occupation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookDoctor;
