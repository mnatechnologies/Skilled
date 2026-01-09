export function EligibilitySteps() {
  const steps = [
    {
      number: 1,
      title: "Contact Us",
      description: "Reach out via phone, email, or our online form. We're here to answer your questions.",
    },
    {
      number: 2,
      title: "Initial Discussion",
      description: "We'll have a friendly chat to understand your situation and needs.",
    },
    {
      number: 3,
      title: "Eligibility Assessment",
      description: "We'll help you determine if you meet the NDIS eligibility criteria.",
    },
    {
      number: 4,
      title: "Application Support",
      description: "If eligible, we'll guide you through the application process step by step.",
    },
    {
      number: 5,
      title: "Ongoing Support",
      description: "Once approved, we'll help you implement and manage your NDIS plan.",
    },
  ];

  return (
    <section id="eligibility" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-teal-900 mb-4">
          Find Out If You're Eligible for the NDIS
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Follow these simple steps to check your eligibility and get started
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-teal-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-orange-500 text-white px-10 py-4 rounded-md font-semibold text-lg hover:bg-orange-600 transition-all hover:scale-105 shadow-lg"
          >
            Check My Eligibility Now
          </a>
        </div>
      </div>
    </section>
  );
}
