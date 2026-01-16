import Link from 'next/link';

export default function RecentProjectsSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 uppercase tracking-wide">
          <span className="text-[#003d82]">Recent Project </span>
          <span className="text-[#001f4d]">Scheduled</span>
        </h2>
        
        <div className="space-y-10">
          {/* Project Card 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Project Image */}
            <div className="bg-gray-300 rounded-lg h-64 w-full"></div>
            
            {/* Project Details */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-900">PROJECT 01</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              
              {/* Learn More Button */}
              <div className="pt-2">
                <Link 
                  href="/projects/1"
                  className="inline-block px-6 py-2.5 bg-[#003d82] text-white font-semibold text-sm uppercase tracking-wide hover:bg-[#002a5c] transition-all duration-300 rounded-full"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Project Image */}
            <div className="bg-gray-300 rounded-lg h-64 w-full"></div>
            
            {/* Project Details */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-900">PROJECT 02</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              
              {/* Learn More Button */}
              <div className="pt-2">
                <Link 
                  href="/projects/2"
                  className="inline-block px-6 py-2.5 bg-[#003d82] text-white font-semibold text-sm uppercase tracking-wide hover:bg-[#002a5c] transition-all duration-300 rounded-full"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
