import { FAQData } from '@/data/content';

function FAQS() {
  return (
    <div className="container-custom">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-themeTextPrimary mb-6 tracking-tight">
          FAQ
        </h2>
        <p className="text-lg text-themeTextSecondary max-w-2xl mx-auto leading-relaxed">
          Le risposte alle domande più frequenti sui nostri servizi di ingegneria civile e ambientale.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto">
        {FAQData.map((item) => (
          <div key={item.question} className="border-b border-themeTextSecondary border-opacity-20">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between py-6 font-bold text-themeTextPrimary group-open:text-themeTextPrimary text-lg tracking-wide">
                {item.question.toUpperCase()}
                <div className="text-themeTextSecondary ml-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="block h-6 w-6 group-open:hidden"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="hidden h-6 w-6 group-open:block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </div>
              </summary>
              <div className="pb-6 text-themeTextSecondary leading-relaxed">
                {item.answer}
              </div>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQS;
