import { IoChevronDown } from 'react-icons/io5'
import back from '../assets/back.png'
import front from '../assets/front.png'
import logoo from '../assets/logoo.png' // 👈 add your logo

const CallToAction = () => {
  return (
    <section className="relative text-center py-16 px-6 flex justify-center items-center">
      {/* Center images */}
      <div style={{ marginTop: '30px', marginBottom: '50px' }} className="relative w-48 h-48">
        {/* Background Image */}
        <img
          src={back}
          alt="Background"
          className="w-full h-full object-cover rounded-lg"
        />

        {/* Overlay Image (centered) */}
        <img
          src={front}
          alt="Overlay"
          style={{ width: "55%", height: "95%" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Logo on the top-right */}
      <div style={{top:100,right:100,}} className="absolute">
        <img src={logoo} alt="Logo" className="w-16 h-16 md:w-20 md:h-20" />
      </div>
    </section>
  )
}

export default CallToAction
