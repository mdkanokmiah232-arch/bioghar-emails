export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-emerald-800 text-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">🏠 House Floor Plan</h1>
          <span className="text-sm text-emerald-200">60&apos; × 28&apos; Total | 5 Rooms</span>
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
              <p className="text-3xl font-bold text-emerald-700">5&apos;</p>
              <p className="text-sm text-gray-600">Veranda Depth</p>
            </div>
          </div>
        </div>

        {/* Floor Plan */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Floor Plan View (Ground Floor)</h3>
          
          {/* Main Container with Veranda + 5 Rooms + Common Area */}
          <div className="relative">
            
            {/* Veranda - Front */}
            <div className="bg-yellow-100 border-4 border-yellow-400 rounded-t-lg flex items-center justify-center" style={{ height: '60px', width: '100%' }}>
              <span className="font-bold text-yellow-800 text-lg">🚪 VERANDA (Main Entry) - 5&apos; Depth</span>
            </div>

            {/* House Structure */}
            <div className="bg-gray-200 border-4 border-gray-400" style={{ width: '100%' }}>
              
              {/* Room Row */}
              <div className="flex" style={{ height: '240px' }}>
                
                {/* Room 1 */}
                <div className="flex-1 border-2 border-blue-300 m-1 rounded-lg bg-blue-50 relative">
                  <div className="text-center py-1 bg-blue-200 rounded-t-lg">
                    <p className="font-bold text-blue-800 text-sm">Room 1</p>
                  </div>
                  <div className="flex" style={{ height: 'calc(100% - 28px)' }}>
                    {/* Corridor */}
                    <div className="w-10 bg-gray-300 border-r border-gray-400 flex items-center justify-center">
                      <span className="text-xs text-gray-600 writing-vertical">4&apos; Corridor</span>
                    </div>
                    {/* Wash Room + Kitchen */}
                    <div className="flex-1 flex flex-col">
                      <div className="h-[60%] bg-cyan-100 border-b border-cyan-300 flex items-center justify-center p-1">
                        <div className="text-center">
                          <p className="text-xs font-bold text-cyan-800">🚿 Wash Room</p>
                          <p className="text-[10px] text-cyan-600">7&apos; Long</p>
                        </div>
                      </div>
                      <div className="h-[40%] bg-orange-100 flex items-center justify-center p-1">
                        <div className="text-center">
                          <p className="text-xs font-bold text-orange-800">🍳 Kitchen</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Room 2 */}
                <div className="flex-1 border-2 border-blue-300 m-1 rounded-lg bg-blue-50 relative">
                  <div className="text-center py-1 bg-blue-200 rounded-t-lg">
                    <p className="font-bold text-blue-800 text-sm">Room 2</p>
                  </div>
                  <div className="flex" style={{ height: 'calc(100% - 28px)' }}>
                    <div className="w-10 bg-gray-300 border-r border-gray-400 flex items-center justify-center">
                      <span className="text-xs text-gray-600 writing-vertical">4&apos; Corridor</span>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="h-[60%] bg-cyan-100 border-b border-cyan-300 flex items-center justify-center p-1">
                        <div className="text-center">
                          <p className="text-xs font-bold text-cyan-800">🚿 Wash Room</p>
                          <p className="text-[10px] text-cyan-600">7&apos; Long</p>
                        </div>
                      </div>
                      <div className="h-[40%] bg-orange-100 flex items-center justify-center p-1">
                        <div className="text-center">
                          <p className="text-xs font-bold text-orange-800">🍳 Kitchen</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Room 3 */}
                <div className="flex-1 border-2 border-blue-300 m-1 rounded-lg bg-blue-50 relative">
                  <div className="text-center py-1 bg-blue-200 rounded-t-lg">
                    <p className="font-bold text-blue-800 text-sm">Room 3</p>
                  </div>
                  <div className="flex" style={{ height: 'calc(100% - 28px)' }}>
                    <div className="w-10 bg-gray-300 border-r border-gray-400 flex items-center justify-center">
                      <span className="text-xs text-gray-600 writing-vertical">4&apos; Corridor</span>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="h-[60%] bg-cyan-100 border-b border-cyan-300 flex items-center justify-center p-1">
                        <div className="text-center">
                          <p className="text-xs font-bold text-cyan-800">🚿 Wash Room</p>
                          <p className="text-[10px] text-cyan-600">7&apos; Long</p>
                        </div>
                      </div>
                      <div className="h-[40%] bg-orange-100 flex items-center justify-center p-1">
                        <div className="text-center">
                          <p className="text-xs font-bold text-orange-800">🍳 Kitchen</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Room 4 */}
                <div className="flex-1 border-2 border-blue-300 m-1 rounded-lg bg-blue-50 relative">
                  <div className="text-center py-1 bg-blue-200 rounded-t-lg">
                    <p className="font-bold text-blue-800 text-sm">Room 4</p>
                  </div>
                  <div className="flex" style={{ height: 'calc(100% - 28px)' }}>
                    <div className="w-10 bg-gray-300 border-r border-gray-400 flex items-center justify-center">
                      <span className="text-xs text-gray-600 writing-vertical">4&apos; Corridor</span>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="h-[60%] bg-cyan-100 border-b border-cyan-300 flex items-center justify-center p-1">
                        <div className="text-center">
                          <p className="text-xs font-bold text-cyan-800">🚿 Wash Room</p>
                          <p className="text-[10px] text-cyan-600">7&apos; Long</p>
                        </div>
                      </div>
                      <div className="h-[40%] bg-orange-100 flex items-center justify-center p-1">
                        <div className="text-center">
                          <p className="text-xs font-bold text-orange-800">🍳 Kitchen</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Room 5 */}
                <div className="flex-1 border-2 border-blue-300 m-1 rounded-lg bg-blue-50 relative">
                  <div className="text-center py-1 bg-blue-200 rounded-t-lg">
                    <p className="font-bold text-blue-800 text-sm">Room 5</p>
                  </div>
                  <div className="flex" style={{ height: 'calc(100% - 28px)' }}>
                    <div className="w-10 bg-gray-300 border-r border-gray-400 flex items-center justify-center">
                      <span className="text-xs text-gray-600 writing-vertical">4&apos; Corridor</span>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="h-[60%] bg-cyan-100 border-b border-cyan-300 flex items-center justify-center p-1">
                        <div className="text-center">
                          <p className="text-xs font-bold text-cyan-800">🚿 Wash Room</p>
                          <p className="text-[10px] text-cyan-600">7&apos; Long</p>
                        </div>
                      </div>
                      <div className="h-[40%] bg-orange-100 flex items-center justify-center p-1">
                        <div className="text-center">
                          <p className="text-xs font-bold text-orange-800">🍳 Kitchen</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Common Area - Bottom */}
              <div className="flex border-t-4 border-gray-400" style={{ height: '80px' }}>
                <div className="flex-1 bg-red-100 border-r border-red-300 flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-bold text-red-800">🚽 Common Toilet</p>
                    <p className="text-xs text-red-600">Men</p>
                  </div>
                </div>
                <div className="flex-1 bg-cyan-100 border-r border-cyan-300 flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-bold text-cyan-800">🚿 Common Wash Room</p>
                    <p className="text-xs text-cyan-600">Shared</p>
                  </div>
                </div>
                <div className="flex-1 bg-red-100 flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-bold text-red-800">🚽 Common Toilet</p>
                    <p className="text-xs text-red-600">Women</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Side Boundary */}
            <div className="absolute -right-4 top-0 bottom-0 flex items-center">
              <span className="text-xs text-gray-500" style={{ writingMode: 'vertical-rl' }}>1.5&apos; Boundary</span>
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
                  <li>📐 12&apos; × 10&apos;</li>
                  <li>🚶 4&apos; Corridor</li>
                  <li>🚿 Wash Room (7&apos;L)</li>
                  <li>🍳 Kitchen</li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="bg-white rounded-xl shadow-md p-6 mt-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Legend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-50 border-2 border-blue-300 rounded"></div>
              <span className="text-sm">Room (12&apos; × 10&apos;)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 border border-gray-400 rounded"></div>
              <span className="text-sm">Corridor (4&apos;)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-cyan-100 border border-cyan-300 rounded"></div>
              <span className="text-sm">Wash Room (7&apos;L)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-100 border border-orange-300 rounded"></div>
              <span className="text-sm">Kitchen</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-yellow-100 border-2 border-yellow-400 rounded"></div>
              <span className="text-sm">Veranda (5&apos;D)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-100 border border-red-300 rounded"></div>
              <span className="text-sm">Toilet (Common)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 border-4 border-gray-400 rounded"></div>
              <span className="text-sm">1.5&apos; Boundary</span>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">House Floor Plan Design</p>
          <p className="text-sm text-gray-500 mt-1">60&apos; × 28&apos; | 5 Rooms | Each with Corridor + Wash Room + Kitchen | Common Toilet + Veranda</p>
        </div>
      </footer>

      <style jsx>{`
        .writing-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
}
