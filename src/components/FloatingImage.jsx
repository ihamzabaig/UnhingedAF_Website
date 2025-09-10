import img2 from '../assets/img2.png'
import apple from '../assets/apple.png'
import googlePlay from '../assets/googlePlay.png'
const FloatingImage = () => {
  return (
    <section className="relative min-h-screen bg-black text-white py-16 px-6">
      <div style={{flexDirection:'row'}} className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left: Text Content */}
        <div style={{width:'700px',marginLeft:'80px'}} className="static w-full lg:w-1/2 flex flex-col space-y-8 text-left z-10 mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold mb-6 text-lg">Stay Connected Instantly</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Stay connected with friends and groups <br /> through real-time chat, voice notes, and <br /> reactions. 
            With our social app's real-time chat, <br /> you can send messages, share media, and <br /> react instantly. 
            From private conversations to <br /> group discussions, staying close to your <br /> friends has never been easier.
          </p>

          <div className="flex flex-row sm:flex-row gap-6 pt-8">
            {/* App Store Button */}
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-4 transition shadow-md"
              style={{ backgroundColor: "rgba(206, 255, 3, 0.94)", borderRadius: "6px", margin: "10px", width: '210px', height:75, justifyContent: 'center' }}
            >
              <img src={apple} alt="Apple" className="w-8 h-8" style={{marginRight:'10px'}}/>
              <div className="flex flex-col leading-tight">
                <span style={{color:'black'}} className="text-black text-sm font-medium">Download from</span>
                <span style={{color:'black'}} className="!text-black text-lg font-bold">App Store</span>
              </div>
            </a>

            {/* Google Play Button */}
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-4 transition shadow-md"
              style={{ backgroundColor: "rgba(206, 255, 3, 0.94)", borderRadius: "6px", margin: "10px", width: '210px', height:75, justifyContent: 'center' }}
            >
              <img src={googlePlay} alt="Google Play" className="w-8 h-8" style={{marginRight:'10px'}}/>
              <div className="flex flex-col leading-tight">
                <span style={{color:'black'}} className="text-black text-sm font-medium">Download from</span>
                <span style={{color:'black'}} className="text-black text-lg font-bold">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right: Floating Image */}
        <div style={{justifyContent:'center',alignItems:'center'}} className="flex w-full lg:w-1/2 flex justify-center lg:justify-center">
          <img
            src={img2}
            alt="Floating Image"
            className="animate-[float_4s_ease-in-out_infinite] drop-shadow-2xl"
            style={{width:'70%',height:'100%'}}
          />
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

export default FloatingImage
