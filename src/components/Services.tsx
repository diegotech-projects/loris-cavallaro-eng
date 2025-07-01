import Image from 'next/image';

import { serviceData } from '@/data/content';
import emogi from '@/images/emogi2.png';

function Services() {
  return (
    <div className="container-custom">
      {/* Header Section */}
      <div className="text-center mb-16">
        <button
          type="button"
          className="flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-full text-sm font-medium text-gray-700 mb-6 mx-auto"
        >
          <span>Our Services</span>
          <Image src={emogi} alt="emoji" className="w-5" />
        </button>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          A comprehensive set of services
        </h2>
        <div className="flex justify-end">
          <div className="flex gap-4">
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium">
              View more
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceData.slice(0, 3).map((service) => (
          <div
            key={service.id}
            className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-w-16 aspect-h-12 bg-gray-200">
              <img 
                src={`https://images.unsplash.com/photo-${
                  service.id === 1 ? '1576091160399-112ba8d25d1f' :
                  service.id === 2 ? '1559757148-5c350d0d3c56' :
                  '1551601651-2a8555f1a136'
                }?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Image src={service.icon} alt="icon" className="w-8 h-8" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
