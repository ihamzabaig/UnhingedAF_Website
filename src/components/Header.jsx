const Header = () => {
  return (
    <header className="w-full bg-black relative">
      <div style={{marginBottom:20}} className="flex items-center justify-between px-6 py-4">
        {/* Navigation buttons on the left */}
        <nav className="flex items-center space-x-4">
          <button className="px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 text-white"
                  style={{ backgroundColor: "#000000" }}>
            Why Exposed
          </button>
          <button className="px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 text-white"
                  style={{ backgroundColor: "#000000" }}>
            Core Features
          </button>
          <button className="px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 text-white"
                  style={{ backgroundColor: "#000000" }}>
            Revenue Growth
          </button>
        </nav>
        
        {/* Logo in the center */}
        {/* <div className="flex-shrink-0">
          <img src={logoo} alt="logoo" className="h-8 w-auto" />
        </div> */}
        
        {/* Download Now button on the right */}
        <div className="flex-shrink-0">
          <button className="px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105" 
                  style={{ 
                    backgroundColor: "#CCFF00", 
                    color: "#000000",
                    margin:10
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#B8E600")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#CCFF00")}>
            Download Now
          </button>
        </div>
      </div>
      
      {/* Horizontal separator line */}
      <div style={{height:0.5,backgroundColor:'#FFFFFF'}} className="w-full h-0.5 bg-white-400"></div>
    </header>
  )
}

export default Header
