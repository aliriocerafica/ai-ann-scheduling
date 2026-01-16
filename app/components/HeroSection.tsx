import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-linear-to-br from-[#003d82] via-[#0052a8] to-[#0066cc] text-white py-20 md:py-28 overflow-hidden">
      {/* Background Pattern/Texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Smart Construction Scheduling with AI
          </h1>
          <p className="text-base md:text-lg mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Optimize your repetitive construction projects with ANN-powered predictions. Save time, reduce risks, and maximize efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/schedule"
              className="w-full sm:w-auto px-8 py-3.5 border-2 border-white text-white font-semibold text-sm hover:bg-white hover:text-[#003d82] transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl"
            >
              Run Schedule Calculation
            </Link>
            <Link 
              href="/learn-more"
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#003d82] font-semibold text-sm hover:bg-gray-100 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
