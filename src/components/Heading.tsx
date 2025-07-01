import Image from 'next/image';

import badge from '@/images/badge.png';

function Heading() {
  return (
    <div className="relative py-20 lg:py-32 overflow-hidden">
      {/* Diagonal Background */}
      <div className="absolute inset-0 bg-yellow-400"></div>
      <div 
        className="absolute inset-0 bg-white"
        style={{
          clipPath: 'polygon(55% 0, 100% 0, 100% 100%, 45% 100%)'
        }}
      ></div>
      
      <div className="wrapper container-custom flex flex-col items-center justify-between gap-y-10 md:flex-row md:gap-y-0 relative z-10">
        <div className="flex flex-col gap-y-8 md:w-1/2 2xl:gap-y-10">
          <div className="text-4xl lg:text-6xl 2xl:text-7xl font-bold text-gray-900 leading-tight">
            <p>Premium Quality</p>
            <p>
              <span className="text-gray-900">Medical</span> Care Services
            </p>
          </div>
          <div className="text-lg text-gray-700 2xl:text-xl max-w-lg">
            <p>Expert medical services with world-class care and trusted professionals providing comprehensive healthcare solutions for your family's wellbeing.</p>
          </div>
          <div className="flex items-center gap-6">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Get Products
            </button>
            <button className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors">
              Contact Us
            </button>
          </div>
        </div>
        <div className="relative h-[50vh] md:w-[45%] lg:h-[70vh]">
          <div className="absolute -left-[10%] top-[20%] z-10">
            <Image src={badge} alt="badge" className="w-32 lg:w-44 2xl:w-56" />
          </div>
          <div className="h-full w-full overflow-hidden rounded-lg shadow-2xl">
            <Image
              height={900}
              width={700}
              src="https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?w=740&t=st=1690641208~exp=1690641808~hmac=62caa6c170d0d3bb42edca62d98a90e5200849a541545134f2dd199c7f4aaaa2"
              alt="Doctor"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
