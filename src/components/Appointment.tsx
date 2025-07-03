'use client';

function Appointment() {
  return (
    <div className="container-custom text-center">
      <div className="text-white">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Ready to pull the trigger? Get a quote today
        </h2>  
        <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        
        <div className="flex justify-center gap-4 mb-16">
          <button className="bg-white text-themeTextPrimary px-8 py-4 rounded-lg font-semibold hover:bg-themeSurfaceLight transition-colors">
            Get Products
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-themeTextPrimary transition-colors">
            Contact Us
          </button>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-16 border-t border-slate-700 text-left">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-lg">MedCare</span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma
            </p>
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-slate-700 rounded"></div>
              <div className="w-8 h-8 bg-slate-700 rounded"></div>
              <div className="w-8 h-8 bg-slate-700 rounded"></div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Resources</h3>
            <div className="space-y-2 text-slate-400">
              <p>Home</p>
              <p>About</p>
              <p>Services</p>
              <p>Projects</p>
              <p>Contact</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Info</h3>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-amber-400">📧</span>
                <span>hello@medcare.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400">📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400">📍</span>
                <span>123 Health St, Medical City</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Follow us</h3>
            <p className="text-slate-400 text-sm">
              Follow us on social media for updates and health tips.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
