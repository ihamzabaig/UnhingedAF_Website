const InvestorReturnsSection = () => {
  const investorReturns = [
    {
      amount: "$7.8K",
      scale: "50K DAU Monthly",
      description: "Initial scale investor return on $77.8K total monthly revenue"
    },
    {
      amount: "$31.1K",
      scale: "200K DAU Monthly", 
      description: "Target scale investor return on $311.2K total monthly revenue"
    },
    {
      amount: "$77.8K",
      scale: "500K DAU Monthly",
      description: "Premium scale investor return on $778K total monthly revenue"
    }
  ]

  return (
    <section className="bg-black text-white">
      <div style={{padding:40}} className="max-w-7xl mx-auto px-6">
        {/* Main Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Investor Returns: 10% Equity Payout
          </h1>
        </div>

        {/* Revenue Breakdown Description */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            Revenue distribution at 200K DAU: Subscriptions (31%), Advertising (39%), Boosts (18%),<br/> PPV Unlocks (10%), and Referral Network (2%). This diversified revenue mix reduces<br/> dependency risk while maximizing monetization opportunities across user segments.
          </p>
        </div>

        {/* Investor Returns Cards */}
        <div style={{justifyContent:'center',alignItems:'center'}}className="flex flex-row md:grid-cols-3 gap-6 mb-8">
          {investorReturns.map((returnData, index) => (
            <div
            style={{backgroundColor:'#121212',width:250,height:220,margin:10,borderTopRightRadius:40,borderBottomLeftRadius:40}}
              key={index}
              className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-all duration-300"
            >
              <div style={{color:'#CEFF03'}} className="text-4xl font-bold text-green-400 mb-2">
               <h2>{returnData.amount}</h2> 
              </div>
              <div style={{marginBottom:10}} className="text-white text-lg font-semibold mb-2">
                <h4>{returnData.scale}</h4>
              </div>
              <div className="text-sm text-gray-400">
                {returnData.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InvestorReturnsSection
