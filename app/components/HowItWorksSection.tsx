export default function HowItWorksSection() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get optimized schedules in 4 simple steps
          </p>
        </div>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-1 bg-linear-to-r from-[#003d82] via-blue-400 to-[#003d82] opacity-20" style={{ top: '3.5rem' }}></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-linear-to-br from-[#003d82] to-[#0066cc] text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg transform transition-transform hover:scale-110">
                  1
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-200 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Input Project Data
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Enter your project details including type, durations, labor, equipment, and working schedules.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-linear-to-br from-[#003d82] to-[#0066cc] text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg transform transition-transform hover:scale-110">
                  2
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-200 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Run Prediction
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our ANN model analyzes your data and generates optimized schedules with risk assessments.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-linear-to-br from-[#003d82] to-[#0066cc] text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg transform transition-transform hover:scale-110">
                  3
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-200 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Review Results
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Examine Gantt charts, comparisons, and critical activities with AI-assisted visualizations.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-linear-to-br from-[#003d82] to-[#0066cc] text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg transform transition-transform hover:scale-110">
                  4
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-200 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Export & Execute
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Save your optimized schedule or export comprehensive reports for your team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
