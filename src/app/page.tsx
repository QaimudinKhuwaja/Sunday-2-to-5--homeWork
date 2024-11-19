export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          I am Qaimudin khuwaja
        </h1>
        <p className="text-xl text-gray-700 text-center mb-6">
          Class Home Work Sunday 2 to 5 pm.
        </p>

        {/* Flexbox container for product cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Product Card 1 */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/3">
            <img 
              src="/product1.webp" 
              alt="Product 1" 
              className="w-[200px] h-[160px] object-cover rounded-md mb-4 " 
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Black Cap</h2>
            <p className="text-lg font-bold text-gray-800">$30.00</p>
            <button className="w-full mt-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Buy Now
            </button>
          </div>

          {/* Product Card 2 */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/3">
            <img 
              src="/product2.jpg" 
              alt="Product 2" 
              className="w-[200px] h-[160px] object-cover rounded-md mb-4" 
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">White Cap</h2>
            <p className="text-lg font-bold text-gray-800">$30.00</p>
            <button className="w-full mt-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Buy Now
            </button>
          </div>

          {/* Product Card 3 */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/3">
            <img 
              src="/product3.jpg" 
              alt="Product 3" 
              className="w-[200px] h-[160px] object-cover rounded-md mb-4" 
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Yellow Cap</h2>
            <p className="text-lg font-bold text-gray-800">$40.00</p>
            <button className="w-full mt-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
