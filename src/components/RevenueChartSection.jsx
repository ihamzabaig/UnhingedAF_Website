import barChart from '../assets/barChart.png'

const RevenueChartSection = () => {
  return (
    <section className="bg-black text-white">
      <div style={{marginBottom:20}} className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Scalable Revenue Projections
          </h1>
        </div>

        {/* Bar Chart Image */}
        <div className="flex justify-center">
          <img
          style={{width:'80%'}}
            src={barChart}
            alt="Scalable Revenue Projections Chart"
            className="max-w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export default RevenueChartSection
