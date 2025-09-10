import rock from '../assets/rock.png'

const RockSection = () => {
  const rooms = [
    {
      title: "Petty Hall",
      description: "Revenge stories and petty confessions"
    },
    {
      title: "Locker Room",
      description: "Boys-only unfiltered space"
    },
    {
      title: "Drunk Confessions",
      description: "Late-night vulnerable oversharing"
    },
    {
      title: "Slayroom",
      description: "Girls-only empowerment zone"
    }
  ]

  return (
    <section className="relative h-auto bg-black text-white">
      <div className="max-w-7xl ">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            The Room System
          </h1>
        </div>

        {/* Room Cards Grid */}
        <div style={{justifyContent:'center',alignItems:'center'}} className="flex flex-row md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room, index) => (
            <div
            style={{width:250,height:220,borderRadius:12,background: "linear-gradient(135deg, #262628, #464646,)",margin:10,padding:20,justifyContent:'center',alignItems:'center'}}
              key={index}
              className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-all duration-300 hover:scale-105"
            >
              {/* Devil Icon with Image */}
              <div style={{ backgroundColor: '#CEFF03', width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }} className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src={rock}   
                  alt="Devil Icon"
                  className="w-8 h-8 object-contain"
                />
              </div>


              {/* Room Title */}
              <h3 className="text-xl font-bold text-white mb-2">
                {room.title}
              </h3>

              {/* Room Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {room.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        {/* <div className="text-center mt-16">
          <div className="flex justify-center mb-8">
            <img
              src={rock}
              alt="Rock Solid Foundation"
              className="animate-[float_4s_ease-in-out_infinite] drop-shadow-2xl"
              style={{ width: '200px', height: '200px' }}
            />
          </div>

          <h3 className="text-3xl font-bold text-white mb-4">
            Choose Your Space
          </h3>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Each room is designed for different types of authentic conversations.
            Find your tribe and express yourself freely.
          </p>

          <button
            className="px-8 py-4 text-black font-bold text-lg rounded-lg transition-all hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "rgba(206, 255, 3, 0.8)" }}
          >
            Enter Rooms
          </button>
        </div> */}
      </div>

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </section>
  )
}

export default RockSection
