import img3 from '../assets/img3.png'
import { IoDocumentText, IoTrendingUp, IoCard, IoHome } from 'react-icons/io5'
import post from '../assets/post.png'
import earn from '../assets/earn.png'
import smart from '../assets/smart.png'
import create from '../assets/create.png'
const CoreFeatures = () => {
  return (
    <section className="relative min-h-screen bg-black text-white py-16 px-6">
      <div style={{flexDirection:'row',justifyContent:'space-between'}} className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        
        {/* Left Side - Mobile Mockup */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start relative z-0 mb-8 lg:mb-0">
          <img
            src={img3}
            alt="Core Features App Mockup"
            className=" animate-[float_4s_ease-in-out_infinite] drop-shadow-2xl"
            style={{width:'60%',height:'100%'}}
          />
        </div>

        <div style={{marginRight:'80px'}} className="static w-full lg:w-1/2 flex flex-col space-y-8 text-left z-10">
          {/* Main Heading */}
          <h2 className="text-5xl lg:text-6xl font-bold text-white">
            Our Core Features
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
            Our social app brings together everything you need – from posting and <br/> chatting to creating rooms, subscriptions, and even earning opportunities <br/> – all in one simple, powerful platform.
          </p>

          {/* Features List */}
          <div style={{marginBottom:20}} className="space-y-2">
            {/* Create Posts */}
            <div style={{flexDirection:'row',alignItems:'center'}} className="flex items-center gap-4">
            <div
  style={{
    width: "50px",
    height: "50px",
    borderRadius: "25px",
    backgroundColor: "grey",
    alignItems: "center",
    marginRight: 10,
  }}
  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0"
>
  <img src={post} alt="icon" className="w-6 h-6" />
</div>

              <div>
              <h3 className="text-lg font-semibold text-white mb-1">Create Posts</h3>
                <p className="text-gray-300">Express yourself with photos, videos, and updates – share your <br/> world with your community.</p>
              </div>
            </div>

            {/* Earn & Grow */}
            <div style={{flexDirection:'row'}} className="flex items-center gap-4">
            <div
  style={{
    width: "50px",
    height: "50px",
    borderRadius: "25px",
    backgroundColor: "grey",
    alignItems: "center",
    marginRight: 10,
  }}
  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0"
>
  <img src={earn} alt="icon" className="w-6 h-6" />
</div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Earn & Grow</h3>
                <p className="text-gray-300">Turn your creativity into income! Our social app lets you earn through <br/> content, subscriptions, and community support.</p>
              </div>
            </div>

            {/* Smart Subscriptions */}
            <div style={{flexDirection:'row'}} className="flex items-center gap-4">
            <div
  style={{
    width: "50px",
    height: "50px",
    borderRadius: "25px",
    backgroundColor: "grey",
    alignItems: "center",
    marginRight: 10,
  }}
  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0"
>
  <img src={smart} alt="icon" className="w-6 h-6" />
</div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Smart Subscriptions</h3>
                <p className="text-gray-300">Enjoy exclusive content, premium rooms, and advanced features <br/> with flexible subscription plans.</p>
              </div>
            </div>

            {/* Create Rooms */}
            <div style={{flexDirection:'row'}} className="flex items-center gap-4">
            <div
  style={{
    width: "50px",
    height: "50px",
    borderRadius: "25px",
    backgroundColor: "grey",
    alignItems: "center",
    marginRight: 10,
  }}
  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0"
>
  <img src={create} alt="icon" className="w-6 h-6" />
</div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Create Rooms</h3>
                <p className="text-gray-300">Host or join interactive rooms for discussions, hangouts, <br/> and events.</p>
              </div>
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

export default CoreFeatures
