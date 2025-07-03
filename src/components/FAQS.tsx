import { FAQData } from '@/data/content';

function FAQS() {
  return (
    <div className="container-custom flex flex-col items-center justify-center gap-5 md:flex-row md:justify-between md:gap-0">
      <div className="h-full md:w-[35%]">
        <div className="flex h-full flex-col gap-5 md:w-[90%]">
          <h1 className="text-center text-4xl font-bold md:text-start 2xl:text-5xl">
            Frequently Asked Questions
          </h1>
          <p>
            FAQs are often organised into categories or sections to make it easy
            for users to find the information they need. They can be found in
            websites, software and in different types of support such as email
            and chatbot
          </p>
        </div>
      </div>

      <div className="flex border-l-2 border-transparent md:w-[60%] md:border-primary">
        <div className="md:w-[10%]" />
        <div className="lg:w-[70%]">
          {FAQData.map((item) => (
            <div key={item.question} className="border-b border-gray-300">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-medium text-primary group-open:text-primary md:text-lg">
                  {item.question}
                  <div className="text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="block h-5 w-5 group-open:hidden"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="hidden h-5 w-5 group-open:block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="pb-4 pl-4 text-gray-700">{item.answer}</div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQS;
