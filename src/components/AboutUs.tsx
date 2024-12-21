export const AboutUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-gray-600">Your trusted travel partner since 2024</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-blue-600 text-4xl font-bold mb-4">1M+</div>
            <h3 className="text-xl font-semibold mb-2">Happy Travelers</h3>
            <p className="text-gray-600">We've helped millions of people reach their destinations</p>
          </div>

          <div className="p-6">
            <div className="text-blue-600 text-4xl font-bold mb-4">100+</div>
            <h3 className="text-xl font-semibold mb-2">Destinations</h3>
            <p className="text-gray-600">Covering major cities and tourist spots worldwide</p>
          </div>

          <div className="p-6">
            <div className="text-blue-600 text-4xl font-bold mb-4">24/7</div>
            <h3 className="text-xl font-semibold mb-2">Support</h3>
            <p className="text-gray-600">Round-the-clock assistance for all your travel needs</p>
          </div>
        </div>
      </div>
    </section>
  );
};