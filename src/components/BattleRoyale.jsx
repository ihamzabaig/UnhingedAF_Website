import img4 from '../assets/img4.png'
import { IoCheckmark } from 'react-icons/io5'
import tick from '../assets/tick.png'
const BattleRoyale = () => {
  return (
    <section className="relative h-auto bg-black text-white px-6">

      <div style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: '50px' }} className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">

        {/* Left Side - Text Content */}
        <div style={{ marginLeft: '30px' }} className="w-full lg:w-1/2 flex flex-col space-y-4 text-left z-10 mb-8 lg:mb-0">
          {/* Main Heading */}
          <h2 className="text-5xl lg:text-6xl font-bold text-white">
            Battle Royale Mode
          </h2>

          {/* Tagline */}
          <p className="text-xl text-white font-medium">
            Dating meets gaming.
          </p>

          {/* Features List */}
          <div className="space-y-2">
            {[
              "200 players (100 guys, 100 girls)",
              "Compete daily for Top 10 leaderboard",
              "Fake notifications push the competition (\"You're 3 likes away from Top 10\")",
              "Winners score $100 cash + glow status for a week"
            ].map((item) => (
              <div className="flex items-center space-x-1 bg-gray-900 p-1 gap-0">

                <div
                  style={{ width: "20px", height: "20px", borderRadius: "10px", marginRight: 10 }}
                  className="h-5 w-5 rounded-full  flex items-center justify-center"
                >
                  <img src={tick} alt="check" className="w-3 h-3" />
                </div>


                <p className="text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>


          <div className="pt-8">
            <button
              className="px-8 py-4 text-black font-bold text-lg rounded-lg transition-all hover:opacity-90"
              style={{ backgroundColor: "rgba(206, 255, 3, 0.8)" ,color:'black',marginTop:20}}
            >
              Download Now
            </button>
          </div>
        </div>


        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-0">
          <img
            src={img4}
            alt="Battle Royale App Mockup"
            className="animate-[float_4s_ease-in-out_infinite] drop-shadow-2xl"
            style={{ width: '80%', height: '100%', marginLeft: 120 }}
          />
        </div>
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

export default BattleRoyale
