const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Dollar Sign Icons */}
      <div className="absolute left-8 top-1/4">
        <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
          <span className="text-black text-2xl font-bold">$</span>
        </div>
      </div>
      
      <div className="absolute right-8 top-1/3">
        <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
          <span className="text-black text-2xl font-bold">$</span>
        </div>
      </div>
      
      {/* Decorative Ribbons */}
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden">
        <div className="absolute -bottom-8 left-1/4 transform -translate-x-1/2 rotate-12">
          <div className="w-96 h-16 bg-white/10 rounded-full flex items-center justify-center">
            <span className="text-white/30 text-sm font-medium">Unhinged App</span>
          </div>
        </div>
        
        <div className="absolute -bottom-4 right-1/4 transform translate-x-1/2 -rotate-12">
          <div className="w-80 h-12 bg-gray-300/20 rounded-full flex items-center justify-center">
            <span className="text-white/20 text-xs font-medium">Unhinged App</span>
          </div>
        </div>
        
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 rotate-6">
          <div className="w-72 h-14 bg-white/5 rounded-full flex items-center justify-center">
            <span className="text-white/10 text-xs font-medium">Unhinged App</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BackgroundElements
