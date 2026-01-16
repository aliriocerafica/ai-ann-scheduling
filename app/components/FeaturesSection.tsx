export default function FeaturesSection() {
  const features = [
    {
      title: "AI-Powered Scheduling",
      description: "Leverage advanced neural networks to predict optimal construction schedules with high accuracy.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      badge: "Core Feature",
      stat: "95% Accuracy",
      highlights: [
        "Deep learning algorithms",
        "Predictive analytics",
        "Real-time optimization"
      ]
    },
    {
      title: "Risk Assessment",
      description: "Identify potential delays and risks before they happen with intelligent analysis.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      badge: "Smart Analysis",
      stat: "30% Faster",
      highlights: [
        "Delay prediction",
        "Resource conflicts",
        "Weather impact analysis"
      ]
    },
    {
      title: "Visual Analytics",
      description: "Interactive Gantt charts and comprehensive visualizations for better project understanding.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      badge: "Interactive",
      stat: "Real-time",
      highlights: [
        "Gantt charts",
        "Critical path display",
        "Progress tracking"
      ]
    },
    {
      title: "Export & Share",
      description: "Generate detailed reports and share schedules with your team effortlessly.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
        </svg>
      ),
      badge: "Collaboration",
      stat: "Multiple Formats",
      highlights: [
        "PDF & Excel export",
        "Team sharing",
        "Custom reports"
      ]
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to optimize your construction scheduling workflow
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-300 overflow-hidden"
            >
              {/* Decorative gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-50/0 to-blue-100/0 group-hover:from-blue-50/50 group-hover:to-blue-100/30 transition-all duration-500 pointer-events-none"></div>
              
              {/* Badge */}
              <div className="absolute top-3 right-3 z-20">
                <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-[#003d82] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                  {feature.badge}
                </span>
              </div>
              
              <div className="relative z-10">
                {/* Icon with decorative elements */}
                <div className="relative mb-6 w-16">
                  <div className="w-16 h-16 bg-linear-to-br from-[#003d82] to-[#0066cc] rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    {feature.icon}
                  </div>
                  {/* Decorative dots - positioned to not interfere with badge */}
                  <div className="absolute top-0 left-0 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-1 -translate-y-1"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 translate-x-1 translate-y-1"></div>
                </div>
                
                {/* Title with stat */}
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <span className="inline-block text-sm font-semibold text-[#003d82] bg-blue-50 px-3 py-1 rounded-full">
                    {feature.stat}
                  </span>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  {feature.description}
                </p>
                
                {/* Highlights - show on hover */}
                <div className="space-y-2 max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-500">
                  <div className="border-t border-gray-200 pt-4">
                    {feature.highlights.map((highlight, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-700 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ transitionDelay: `${idx * 100}ms` }}
                      >
                        <svg className="w-4 h-4 text-[#003d82] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        {/* Additional info section */}
        <div className="mt-16 flex justify-center px-4">
          <div className="w-full max-w-3xl bg-blue-50 rounded-2xl border border-blue-100 py-6 px-4 sm:py-8 sm:px-8">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12">
              <div className="text-center shrink-0">
                <div className="text-2xl sm:text-3xl font-bold text-[#003d82] mb-1">50+</div>
                <div className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">Projects Completed</div>
              </div>
              
              <div className="hidden sm:block h-12 w-px bg-blue-200"></div>
              
              <div className="text-center shrink-0">
                <div className="text-2xl sm:text-3xl font-bold text-[#003d82] mb-1">95%</div>
                <div className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">Accuracy Rate</div>
              </div>
              
              <div className="hidden sm:block h-12 w-px bg-blue-200"></div>
              
              <div className="text-center shrink-0">
                <div className="text-2xl sm:text-3xl font-bold text-[#003d82] mb-1">30%</div>
                <div className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">Time Saved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
