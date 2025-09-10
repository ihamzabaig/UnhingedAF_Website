import googlePlay from '../assets/googlePlay.png'
import apple from '../assets/apple.png'
import logoo from '../assets/logoo.png'
import name from '../assets/name.png'
const Hero = () => {
  return (
    <section className=" relative text-center pt-20 md:pt-24 pb-16 px-4 md:px-6">

      <div style={{marginLeft:25,marginBottom:'100px'}} className="absolute left-6 top-1/2 transform -translate-y-1/2">
        <img src={logoo} alt="Logo" className="w-20 h-20 md:w-28 md:h-28" />
      </div>
    
      <div className="mx-auto max-w-4xl">


      <div style={{marginTop:'100px',marginLeft:'30px'}} className="flex-shrink-0">
        <img src={name} alt="Unhinged AF" className="h-8 w-auto" />
      </div>
      

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 md:mb-12 max-w-4xl mx-auto px-4">
          Where Gen Z Dates, Competes, and Cashes Out!
        </p>

        {/* Download Buttons */}
        <div style={{ marginBottom: '130px' }} className="flex flex-row sm:flex-row gap-6 pt-8 justify-center">
          {/* App Store Button */}
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-4 transition shadow-md"
            style={{ backgroundColor: "rgba(206, 255, 3, 0.94)", borderRadius: "6px", margin: "10px", width: '210px', justifyContent: 'center' ,height:75}}
          >
            <img src={apple} alt="Apple" className="w-8 h-8" />
            <div className="flex flex-col leading-tight">
              <span style={{ color: 'black' }} className="text-black text-sm font-medium">Download From</span>
              <span style={{ color: 'black',fontSize:'20px'}} className="text-black text-lg font-bold">App Store</span>
            </div>
          </a>

          {/* Google Play Button */}
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-4 transition shadow-md"
            style={{
              backgroundColor: "rgba(206, 255, 3, 0.94)",
              borderRadius: "6px",
              margin: "10px",
              width: "215px",
             height:75,
              justifyContent: "center",
            }}
          >
            <img src={googlePlay} alt="Google Play" className="w-8 h-8" style={{ marginRight: '10px' }} />
            <div className="flex flex-col leading-tight">
              <span style={{ color: 'black' }} className="!text-black text-sm font-medium">Download From</span>
              <span style={{ color: 'black',fontSize:'20px' }} className="!text-black text-lg font-bold">Google Play</span>
            </div>
          </a>

        </div>

      </div>
    </section>
  )
}

export default Hero
