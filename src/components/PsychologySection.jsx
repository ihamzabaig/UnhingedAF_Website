import React from "react";
import fomoImg from "../assets/fomoImg.png";
import sunkCostImg from "../assets/sunkCostImg.png";
import validationImg from "../assets/validationImg.png";
import dopamineImg from "../assets/dopamineImg.png";
import rankingImg from "../assets/rankingImg.png";
import alertImg from "../assets/alertImg.png";
import proofImg from "../assets/proofImg.png";

const PsychologySection = () => {
  const triggers = [
    { title: "FOMO Engine", img: fomoImg },
    { title: "Sunk Cost Trap", img: sunkCostImg },
    { title: "Validation Seeking", img: validationImg },
    { title: "Micro-Dopamine Hits", img: dopamineImg },
    { title: "Rankings disappear", img: rankingImg },
    { title: "Ego-stroking push alerts", img: alertImg },
    { title: "Need for social proof drives natural reinvestment", img: proofImg }
  ];

  return (
    <section className="w-full bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title and Description */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Psychology Behind the Addiction
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Every feature in Unhinged AF exploits proven psychological triggers that keep<br/> users coming back for more. 
            We're not just building an app — we're engineering<br/> behavioral addiction.
          </p>
        </div>

        {/* Psychological Trigger Cards */}
        <div style={{padding:30,marginBottom:40}} className="max-w-6xl mx-auto">
        {/* Row 1 - 4 cards */}
        <div style={{flexDirection:'row'}} className="flex flex-row sm:grid-rows-2 lg:grid-rows-4 gap-6 mb-6">
          {triggers.slice(0, 4).map((item, idx) => (
            <div
            style={{width:"25%",margin:10,borderRadius:6,padding:10,borderColor:'#525252',background: "linear-gradient(135deg, #262628, #464646,)"}}
              key={idx}
              className="flex items-center gap-4 bg-gradient-to-br from-[#1a1a1a] to-[#222] rounded-xl px-6 py-4 border border-gray-800 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div style={{backgroundColor:'#525252',marginRight:5,width:40,height:40,borderRadius:12}} className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#CEFF03]">
                <img src={item.img} alt={item.title} className="w-6 h-6 object-contain" />
              </div>
              <span className="text-white font-medium">{item.title}</span>
            </div>
          ))}
        </div>

        {/* Row 2 - 3 cards */}
        <div style={{flexDirection:'row',padding:20,justifyContent:'center'}} className="flex flex-row sm:grid-row-2 lg:grid-row-3 gap-6">
          {triggers.slice(4, 7).map((item, idx) => (
            <div
            style={{width:"25%",margin:10,borderRadius:6,padding:10,borderColor:'#525252',background: "linear-gradient(135deg, #262628, #464646,)"}}
              key={idx + 4}
              className="flex items-center gap-4 bg-gradient-to-br from-[#1a1a1a] to-[#222] rounded-xl px-6 py-4 border border-gray-800 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div style={{backgroundColor:'#525252',marginRight:5,width:40,height:40,borderRadius:12}} className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#CEFF03]">
                <img src={item.img} alt={item.title} className="w-6 h-6 object-contain" />
              </div>
              <span className="text-white font-medium">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      </div>
    </section>
  );
};

export default PsychologySection;
