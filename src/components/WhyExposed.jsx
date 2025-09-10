import img1 from '../assets/img1.png'
import apple from '../assets/apple.png'
import googlePlay from '../assets/googlePlay.png'
import { IoCheckmark } from 'react-icons/io5'
import tick from '../assets/tick.png'
const WhyExposed = () => {
  return (
    <section className="relative min-h-screen bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto relative flex flex-col lg:flex-row items-center">

        {/* Left Side - Mobile Mockup */}
        <div style={{ flexDirection: 'row', justifyContent: 'space-between' }} className="w-full lg:w-1/2 flex justify-center lg:justify-start relative z-0 mb-8 lg:mb-0">
          <img
            src={img1}
            alt="Exposed App Mockup"
            className=" animate-[float_4s_ease-in-out_infinite] drop-shadow-2xl"
            style={{ width: '30%', height: '90%', marginLeft: '90px' }}
          />



          {/* Right Side - Text Overlapping (in front of image) */}
          <div style={{ alignItems: 'center' }} className="static w-full lg:w-1/2 flex flex-col space-y-8 text-left z-10">
            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold text-white">
              Why Exposed
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              Dating apps are stuck in the past — endless swiping, predictable bios,  <br />
              nothing exciting.Gen Z doesn't want that. They want  <br />
              bold.They want chaos. They want unhinged.
            </p>

            {/* Features List */}

            <div className="flex flex-col gap-1">   {/* reduce gap between items */}
              {[
                "Rooms that change your feed instantly",
                "Stats that actually matter (body count, income, height, weight)",
                "Games and leaderboards, not just swipes",
                "A platform that pays creators, not just charges them"
              ].map((item) => (
                <div className="flex items-center space-x-2 bg-gray-900 p-1 gap-1">
                  {/* Circle with checkmark */}
                  <div
                    style={{ width: "20px", height: "20px", borderRadius: "10px", marginRight: 10 }}
                    className="h-5 w-5 rounded-full flex items-center justify-center"
                  >
                    <img src={tick} alt="check" className="w-3 h-3" />
                  </div>


                  {/* Text */}
                  <p className="text-white">
                    {item}
                  </p>
                </div>

              ))}
            </div>



            {/* Download Buttons */}
            <div className="flex flex-row sm:flex-row gap-4 pt-6">
              {/* App Store Button */}
              <a
                href="#"
                className="flex items-center gap-3 px-6 py-4 transition shadow-md"
                style={{ backgroundColor: "rgba(206, 255, 3, 0.94)", borderRadius: "6px", margin: "10px", minWidth: '210px', height:75 , justifyContent: 'center' }}
              >
                <img src={apple} alt="Apple" className="w-8 h-8" />
                <div className="flex flex-col leading-tight">
                  <span style={{ color: 'black' }} className="text-black text-sm font-medium">Download from</span>
                  <span style={{ color: 'black' }} className="text-black text-lg font-bold">App Store</span>
                </div>
              </a>

              {/* Google Play Button */}
              <a
                href="#"
                className="flex items-center gap-3 px-6 py-4 transition shadow-md"
                style={{ backgroundColor: "rgba(206, 255, 3, 0.94)", borderRadius: "6px", margin: "10px", width: '210px', justifyContent: 'center',height:75 }}
              >
                <img src={googlePlay} alt="Google Play" className="w-8 h-8" style={{ marginRight: '10px' }} />
                <div className="flex flex-col leading-tight">
                  <span style={{ color: 'black' }} className="text-black text-sm font-medium">Download From</span>
                  <span style={{ color: 'black' }} className="text-black text-lg font-bold">Google Play</span>
                </div>
              </a>
            </div>


          </div>
        </div>
      </div>
      {/* Floating animation keyframes */}
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

export default WhyExposed
