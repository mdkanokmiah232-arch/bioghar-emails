export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-emerald-800 text-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">🏠 House Floor Plan</h1>
          <span className="text-sm text-emerald-200">60&apos; × 28&apos; Total Area</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Info Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">House Layout Details</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-emerald-50 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-emerald-700">60&apos;</p>
              <p className="text-sm text-gray-600">Length</p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-emerald-700">28&apos;</p>
              <p className="text-sm text-gray-600">Width</p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-emerald-700">5</p>
              <p className="text-sm text-gray-600">Rooms</p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-emerald-700">1.5&apos;</p>
              <p className="text-sm text-gray-600">Boundary Gap</p>
            </div>
          </div>
        </div>

        {/* Floor Plan */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Floor Plan View</h3>
          
          {/* Main Container - 60ft x 28ft with 1.5ft boundary */}
          <div className="relative bg-gray-200 border-4 border-gray-400" style={{ height: '280px', width: '600px' }}>
            
            {/* Boundary Gap Indicators */}
            <div className="absolute -top-6 left-0 text-xs text-gray-500">1.5ft Boundary</div>
            
            {/* Inner Area - 57ft x 25ft */}
            <div className="absolute top-3 left-3 right-3 bottom-3 bg-gray-100 border-2 border-gray-300">
              
              {/* Room 1 */}
              <div className="absolute top-0 left-0 w-[calc(33.33%-4px)] h-[calc(50%-4px)] bg-blue-100 border-2 border-blue-300 m-1 rounded-lg">
                <div className="text-center py-2">
                  <p className="font-bold text-blue-800">Room 1</p>
                  <p className="text-xs text-blue-600">12&apos; × 10&apos;</p>
                </div>
              </div>

              {/* Room 2 */}
              <div className="absolute top-0 left-[calc(33.33%+4px)] w-[calc(33.33%-4px)] h-[calc(50%-4px)] bg-blue-100 border-2 border-blue-300 m-1 rounded-lg">
                <div className="text-center py-2">
                  <p className="font-bold text-blue-800">Room 2</p>
                  <p className="text-xs text-blue-600">12&apos; × 10&apos;</p>
                </div>
              </div>

              {/* Room 3 */}
              <div className="absolute top-0 left-[calc(66.66%+4px)] w-[calc(33.33%-4px)] h-[calc(50%-4px)] bg-blue-100 border-2 border-blue-300 m-1 rounded-lg">
                <div className="text-center py-2">
                  <p className="font-bold text-blue-800">Room 3</p>
                  <p className="text-xs text-blue-600">12&apos; × 10&apos;</p>
                </div>
              </div>

              {/* Room 4 */}
              <div className="absolute bottom-0 left-0 w-[calc(33.33%-4px)] h-[calc(50%-4px)] bg-blue-100 border-2 border-blue-300 m-1 rounded-lg">
                <div className="text-center py-2">
                  <p className="font-bold text-blue-800">Room 4</p>
                  <p className="text-xs text-blue-600">12&apos; × 10&apos;</p>
                </div>
              </div>

              {/* Room 5 */}
              <div className="absolute bottom-0 left-[calc(33.33%+4px)] w-[calc(33.33%-4px)] h-[calc(50%-4px)] bg-blue-100 border-2 border-blue-300 m-1 rounded-lg">
                <div className="text-center py-2">
                  <p className="font-bold text-blue-800">Room 5</p>
                  <p className="text-xs text-blue-600">12&apos; × 10&apos;</p>
                </div>
              </div>

              {/* Common Area */}
              <div className="absolute bottom-0 left-[calc(66.66%+4px)] w-[calc(33.33%-4px)] h-[calc(50%-4px)] bg-orange-100 border-2 border-orange-300 m-1 rounded-lg">
                <div className="text-center py-4">
                  <p className="font-bold text-orange-800">Common</p>
                  <p className="text-xs text-orange-600">Toilet +</p>
                  <p className="text-xs text-orange-600">Wash Room</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Room Details */}
        <div className="bg-white rounded-xl shadow-md p-6 mt-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Room Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((room) => (
              <div key={room} className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-2">Room {room}</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>📐 Size: 12&apos; × 10&apos;</li>
                  <li>🚿 Attached Bath: Yes</li>
                  <li>🚽 Toilet: Yes</li>
                  <li>🚰 Wash Room: Yes</li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="bg-white rounded-xl shadow-md p-6 mt-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Legend</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-100 border border-blue-300 rounded"></div>
              <span className="text-sm">Room (12&apos; × 10&apos;)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-cyan-100 border border-cyan-300 rounded"></div>
              <span className="text-sm">Attached Bath</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-orange-100 border border-orange-300 rounded"></div>
              <span className="text-sm">Common Toilet/Wash</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-200 border border-gray-400 rounded"></div>
              <span className="text-sm">1.5ft Boundary Gap</span>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">House Floor Plan Design</p>
          <p className="text-sm text-gray-500 mt-1">60&apos; × 28&apos; | 5 Rooms with Attached Bathrooms</p>
        </div>
      </footer>
    </div>
  );
}
