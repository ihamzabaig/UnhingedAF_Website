import React from "react";
import curve from "../assets/curve.png"; // your curve image

const GrowthEngine = () => {
  return (
    <section className="bg-black text-white py-16 px-6 relative">
      <div style={{padding:90,marginBottom:300}} className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Exponential Growth Engine
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
          Unlike traditional apps that grow linearly through ad spend, Unhinged
          AF is <br/> engineered for exponential self-replication. Every user becomes
          a growth driver<br/> through engineered viral loops.
        </p>

        {/* Timeline Section */}
        <div className="relative w-full">
          {/* Background Curve */}
          <img
            src={curve}
            alt="curve"
            className="w-full h-auto object-contain"
            style={{width:'80%'}}
          />

          {/* Circles with Content */}
          <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-4">
            {/* Day 0 */}
            <div className="flex flex-col items-center  max-w-[200px] -mt-10">
              <div style={{backgroundColor:'#CEFF03',width:80,height:80,borderRadius:40,justifyContent:'center',alignItems:'center',bottom:140}} className="bg-lime-400 text-black font-bold rounded-full shadow-lg">
               <h2 style={{justifyContent:'center',alignItems:'center',color:'black'}}>Day 0</h2> 
              </div>
              <h3 className="mt-4 font-semibold">Launch Phase</h3>
              <p className="text-gray-400 text-sm">
                10K DAU via meme-page promotional blitz targeting Gen Z
                audiences
              </p>
            </div>

            {/* Day 30 */}
            <div style={{bottom:80,marginBottom:70,paddingBottom:90}} className="flex flex-col items-center text-center max-w-[200px] ">
            <div style={{backgroundColor:'#CEFF03',width:80,height:80,borderRadius:40,justifyContent:'center',alignItems:'center'}} className="bg-lime-400 text-black font-bold rounded-full shadow-lg">
               <h2 style={{justifyContent:'center',alignItems:'center',color:'black'}}>Day 30</h2> 
              </div>
              <h3 className="mt-4 font-semibold">Viral Activation</h3>
              <p className="text-gray-400 text-sm">
                80K DAU through viral seeding and aggressive referral mechanics
              </p>
            </div>

            {/* Day 60 */}
            <div style={{bottom:80,marginBottom:70,paddingBottom:350,marginRight:70}} className="flex flex-col items-end text-center max-w-[200px]">
            <div style={{backgroundColor:'#CEFF03',width:80,height:80,borderRadius:40,justifyContent:'center',alignItems:'center',bottom:140}} className="bg-lime-400 text-black font-bold rounded-full shadow-lg">
               <h2 style={{justifyContent:'center',alignItems:'center',color:'black'}}>Day 60</h2> 
              </div>
              <h3 className="mt-4 font-semibold">Network Effects</h3>
              <p className="text-gray-400 text-sm">
                200K DAU as self-replication compounds and user-generated
                content goes viral
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Add bottom padding so next section won’t overlap */}
      <div className="h-32"></div>
    </section>
  );
};

export default GrowthEngine;
