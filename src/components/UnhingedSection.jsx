import social from '../assets/social.png';
const UnhingedSection = () => {
  return (
    <section  className="w-full bg-black py-16 px-4 md:px-6">
      <div  style={{marginBottom:40,padding:20}} className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Unhinged AF
          </h1>
          <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed">
            The gamified social platform that's breaking all the rules – where chaos meets competition and your ego gets the dopamine hit it craves.
          </p>
        </div>

        {/* Three Feature Cards in Same Line */}
        <div className="flex flex-row lg:flex-row gap-6 lg:gap-8">
          {/* Card 1 - Gen Z Social Arena */}
          <div style={{ width: 8, borderRadius: 20, margin: 20, padding: 18,background:'rgba(40, 39, 39, 0.5)',borderColor:'rgba(81, 78, 78, 0.5)' }} className="flex-1 bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 hover:scale-105 shadow-lg border border-gray-700">
            <div className="flex mb-6 flex-col">
              <div style={{backgroundColor:'#CEFF03',width:50,height:50,borderRadius:8}} className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <img
                  src={social}
                  alt="icon"
                  className="w-7 h-7 object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold text-white">Gen Z Social Arena</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              Not your basic swipe app. This is where unfiltered expression meets high-stakes competition in a psychological playground designed to keep you hooked.
            </p>
          </div>

          {/* Card 2 - Chaotic By Design */}
          <div style={{ width: 8, borderRadius: 20, margin: 20, padding: 18,background:'rgba(40, 39, 39, 0.5)',borderColor:'rgba(81, 78, 78, 0.5)' }} className="flex-1 bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 hover:scale-105 shadow-lg border border-gray-700">
            <div className="flex mb-6 flex-col">
              <div style={{backgroundColor:'#CEFF03',width:50,height:50,borderRadius:8}} className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <img
                  src={social}
                  alt="icon"
                  className="w-7 h-7 object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold text-white">Chaotic By Design</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              Anonymous rooms, wild dating filters, Battle Royale matches, and local discovery that puts you on the map when you're ready to be seen.
            </p>
          </div>

          {/* Card 3 - Ego-Driven Economy */}
          <div style={{ width: 8, borderRadius: 20, margin: 20, padding: 18,background:'rgba(40, 39, 39, 0.5)',borderColor:'rgba(81, 78, 78, 0.5)' }} className="flex-1 bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 hover:scale-105 shadow-lg border border-gray-700">
            <div className="flex mb-6 flex-col">
              <div style={{backgroundColor:'#CEFF03',width:50,height:50,borderRadius:8}} className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <img
                  src={social}
                  alt="icon"
                  className="w-7 h-7 object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold text-white">Ego-Driven Economy</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              Every interaction triggers psychological hooks - FOMO, validation seeking, and competitive spending that creates an addictive revenue machine.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UnhingedSection
