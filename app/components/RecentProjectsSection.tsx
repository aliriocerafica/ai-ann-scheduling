import Link from 'next/link';

export default function RecentProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Multi-Story Residential Complex",
      description: "A comprehensive scheduling solution for a 12-floor residential building project. The AI system optimized the construction timeline by 15%, identifying potential bottlenecks in material delivery and labor allocation. The project was completed 3 weeks ahead of schedule with improved resource utilization.",
      duration: "18 months",
      completion: "95%",
      type: "Residential"
    },
    {
      id: 2,
      title: "Commercial Office Building",
      description: "Advanced scheduling for a modern commercial office space with complex architectural requirements. The neural network predicted critical path activities with 92% accuracy, enabling proactive risk management and efficient coordination between multiple contractors and trades.",
      duration: "24 months",
      completion: "78%",
      type: "Commercial"
    },
    {
      id: 3,
      title: "Highway Bridge Construction",
      description: "Infrastructure project featuring repetitive concrete pouring and steel assembly activities. The ANN-powered scheduling system reduced idle time by 22% and optimized crew rotation schedules. Successfully coordinated multiple work zones while maintaining safety protocols and minimizing traffic disruption.",
      duration: "15 months",
      completion: "62%",
      type: "Infrastructure"
    },
    {
      id: 4,
      title: "Shopping Mall Development",
      description: "Large-scale retail complex with repetitive unit construction across multiple floors. The intelligent scheduling tool predicted material requirements with 94% accuracy, reducing waste and storage costs. Real-time risk assessment helped avoid weather-related delays during critical phases.",
      duration: "20 months",
      completion: "88%",
      type: "Commercial"
    },
    {
      id: 5,
      title: "Educational Campus Expansion",
      description: "Multi-building educational facility with identical classroom structures. AI optimization reduced overall project duration by 18% through efficient resource allocation and parallel activity scheduling. The system successfully managed complex dependencies between foundation, structural, and finishing works.",
      duration: "16 months",
      completion: "100%",
      type: "Educational"
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-linear-to-br from-[#003d82] via-[#0052a8] to-[#0066cc] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Recent Projects Scheduled
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            See how our AI-powered system has optimized real construction projects
          </p>
        </div>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl h-80 w-full overflow-hidden shadow-2xl group hover:shadow-blue-500/20 transition-shadow duration-300">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                    <svg className="w-24 h-24 text-[#003d82] opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-[#003d82]/80 to-transparent p-6">
                    <div className="flex gap-3">
                      <span className="px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-[#003d82]">
                        {project.type}
                      </span>
                      <span className="px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-[#003d82]">
                        {project.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Details */}
              <div className={`space-y-5 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full text-sm font-semibold mb-4">
                    Project {String(project.id).padStart(2, '0')}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-blue-50 leading-relaxed text-base">
                  {project.description}
                </p>
                
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-100 font-medium">Completion Status</span>
                    <span className="text-white font-bold">{project.completion}</span>
                  </div>
                  <div className="w-full bg-white/20 backdrop-blur-sm rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-white h-full rounded-full transition-all duration-500 shadow-lg"
                      style={{ width: project.completion }}
                    ></div>
                  </div>
                </div>
                
                {/* Learn More Button */}
                <div className="pt-2">
                  <Link 
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#003d82] font-semibold rounded-xl hover:bg-blue-50 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                  >
                    View Project Details
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-16 text-center">
          <Link 
            href="/projects"
            className="inline-flex items-center gap-3 px-12 py-4 bg-white text-[#003d82] font-bold text-lg rounded-xl hover:bg-blue-50 shadow-2xl hover:shadow-blue-300/50 hover:scale-105 transition-all duration-300 group"
          >
            View All Projects
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <p className="mt-4 text-blue-100">
            Explore our complete portfolio of {projects.length}+ successfully scheduled construction projects
          </p>
        </div>
      </div>
    </section>
  );
}
