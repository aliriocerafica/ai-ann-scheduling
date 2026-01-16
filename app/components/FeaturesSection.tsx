export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#003d82] mb-10 uppercase tracking-wide">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature Card 1 */}
          <div className="bg-gray-100 rounded-lg p-6 h-56 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#003d82] rounded-full mb-4"></div>
            <h3 className="text-base font-bold text-gray-800 text-center">Feature 1</h3>
            <p className="text-sm text-gray-600 text-center mt-2">Description coming soon</p>
          </div>
          
          {/* Feature Card 2 */}
          <div className="bg-gray-100 rounded-lg p-6 h-56 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#003d82] rounded-full mb-4"></div>
            <h3 className="text-base font-bold text-gray-800 text-center">Feature 2</h3>
            <p className="text-sm text-gray-600 text-center mt-2">Description coming soon</p>
          </div>
          
          {/* Feature Card 3 */}
          <div className="bg-gray-100 rounded-lg p-6 h-56 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#003d82] rounded-full mb-4"></div>
            <h3 className="text-base font-bold text-gray-800 text-center">Feature 3</h3>
            <p className="text-sm text-gray-600 text-center mt-2">Description coming soon</p>
          </div>
          
          {/* Feature Card 4 */}
          <div className="bg-gray-100 rounded-lg p-6 h-56 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#003d82] rounded-full mb-4"></div>
            <h3 className="text-base font-bold text-gray-800 text-center">Feature 4</h3>
            <p className="text-sm text-gray-600 text-center mt-2">Description coming soon</p>
          </div>
        </div>
      </div>
    </section>
  );
}
