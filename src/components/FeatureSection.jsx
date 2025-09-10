import React from "react";
import blacktick from "../assets/blacktick.png"; // tick image
import about from "../assets/about.png"; // right illustration image

const FeatureSection = () => {
  return (
    <section className="w-full bg-black py-16 px-6">
      {/* Floating animation keyframes */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>

      <div style={{padding:'60px',marginBottom:30}} className="max-w-7xl mx-auto flex flex-row md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            This Isn't Just Another App
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
            Unhinged AF is a Traditional Social App. We've built a psychological<br/> 
            engine where users compete, spend, and spread the chaos <br/>organically. 
            It's not just engagement — it's addiction by design.
          </p>

          {/* Features Grid */}
          <div className="flex flex-wrap gap-4">
  {[
    "Passive scrolling",
    "Algorithm decides visibility",
    "Polished, fake personas",
    "Linear engagement patterns",
    "Exponential viral loops",
    "Users fight for visibility",
    "Active competition for status"
  ].map((item, idx) => (
    <div
    style={{backgroundColor:'#1F1F20',margin:6,width:60,borderRadius:8,padding:10}}
      key={idx}
      className="flex items-center gap-3 bg-gray-800 rounded-md px-4 py-2 flex-1 min-w-[45%]"
    >
      <img src={blacktick} alt="tick" className="w-3 h-3" style={{marginRight:4,backgroundColor:'#CEFF03',height:20,width:20,borderRadius:10}}/>
      <span className="text-gray-200 text-base">{item}</span>
    </div>
  ))}
</div>

        </div>

        {/* Right Floating Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={about}
            alt="floating"
            className="w-80 animate-float"
            style={{ width: "350px", height: "350px", borderRadius: "10px", marginRight: 10 }}
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
