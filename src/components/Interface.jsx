import img5 from '../assets/img5.png'

const Interface = () => {
  return (
    <section className="relative min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Section - Text Content */}
        <div  style={{marginBottom:90}} className="text-center mb-12">
          <h1  className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Great Interface will Amaze You
          </h1>
          <p style={{margin:'20px'}} className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
            With a massive range of powerful new features with a gorgeous new interface, our app is easier to use and more.
          </p>
        </div>

        {/* Bottom Section - Mobile Mockup */}
        <div className="flex justify-center items-center">
          <img
            src={img5}
            alt="Interface App Mockup"
            className=" animate-[float_4s_ease-in-out_infinite] drop-shadow-2xl"
            style={{width:'70%',height:'90%'}}
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

export default Interface
