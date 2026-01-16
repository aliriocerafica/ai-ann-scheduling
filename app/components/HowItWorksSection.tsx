export default function HowItWorksSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            How It Works
          </h2>
          <p className="text-gray-600 text-base">
            Get optimized schedules in 4 simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="relative flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-[#003d82] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
              1
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Input Project Data
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Enter your project details including type, durations, labor, equipment, and working schedules.
            </p>
            {/* Arrow */}
            <div className="hidden lg:block absolute top-6 -right-4 text-[#003d82]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-[#003d82] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
              2
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Run Prediction
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our ANN model analyzes your data and generates optimized schedules with risk assessments.
            </p>
            {/* Arrow */}
            <div className="hidden lg:block absolute top-6 -right-4 text-[#003d82]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-[#003d82] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
              3
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Review Results
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Examine Gantt charts, comparisons, and critical activities with AI-assisted visualizations.
            </p>
            {/* Arrow */}
            <div className="hidden lg:block absolute top-6 -right-4 text-[#003d82]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-[#003d82] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
              4
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Export & Execute
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Save your optimized schedule or export comprehensive reports for your team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
