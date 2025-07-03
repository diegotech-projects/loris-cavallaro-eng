import { StatsData } from '@/data/content';

function Stats() {
  return (
    <div className="container-custom">
      <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
        {/* Left Side - Image placeholder */}
        <div className="lg:w-1/2">
          <div className="h-80 lg:h-96 bg-themeSurfaceLight rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Medical Equipment" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2">
          <div className="mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-themeTextPrimary mb-4">
              Our impact in numbers
            </h2>
            <p className="text-lg text-themeTextSecondary">
              Lorem ipsum dolor sit amet consectetur adipiscing elit semper nulla magna eleget mauris dapibus tincidunt amet.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            {StatsData.stats.map((item, index) => (
              <div key={index}>
                <h3 className="text-4xl lg:text-5xl font-bold text-themeTextPrimary mb-2">
                  {item.title}+
                </h3>
                <p className="text-themeTextSecondary font-medium">
                  {item.stat}
                </p>
              </div>
            ))}
            <div>
              <h3 className="text-4xl lg:text-5xl font-bold text-themeTextPrimary mb-2">
                100%
              </h3>
              <p className="text-themeTextSecondary font-medium">
                Patient Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
