import React from "react";
import battle from '../assets/battle.png';
import rocket from '../assets/rocket.png';
import ad from '../assets/ad.png';
const RevenueSection = () => {
  const revenueStreams = [
    {
      icon: battle, // Using social.png as placeholder for the atom/swirling icon
      value: "$3.99",
      label: "Weekly Battle Pass"
    },
    {
      icon: rocket, // Using social.png as placeholder for the rocket icon
      value: "7%",
      label: "Boost Purchase Rate"
    },
    {
      icon: ad, // Using social.png as placeholder for the wallet icon
      value: "$2",
      label: "Ad Revenue ECPM"
    }
  ];

  return (
    <section className="w-full bg-black px-6">
    <div style={{justifyContent:'center',alignItems:'center'}} className="max-w-7xl mx-auto">
  
        {/* Title and Description */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            8 Revenue Streams = Maximum Extraction
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We've engineered multiple ways to monetize every user behavior – from impulse<br/> purchases to subscription loyalty to viral growth mechanics.
          </p>
        </div>

        {/* Revenue Cards */}
        <div style={{padding:60,width:"100%"}}  className="flex flex-row md:flex-row gap-8 justify-center items-center">
          {revenueStreams.map((stream, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105 shadow-lg flex-1 max-w-sm"
              style={{
                background: 'rgba(32, 32, 32, 0.8)',
                backdropFilter: 'blur(10px)',
                margin:10,
                width:6,
                height:200,
                justifyContent:'center',
                alignItems:'center',
                padding:50,
                borderRadius:12
              }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg"
                  // style={{ backgroundColor: '#CEFF03' }}
                >
                  <img
                    src={stream.icon}
                    alt={stream.label}
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              
              {/* Value */}
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-white mb-2">
                  {stream.value}
                </div>
                <div className="text-gray-300 text-lg">
                  {stream.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RevenueSection;
