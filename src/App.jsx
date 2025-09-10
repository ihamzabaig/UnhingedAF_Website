import Header from './components/Header'
import Hero from './components/Hero'
import UnhingedSection from './components/UnhingedSection'
import BackgroundElements from './components/BackgroundElements'
import CallToAction from './components/CallToAction'
import WhyExposed from './components/WhyExposed'
import FloatingImage from './components/FloatingImage'
import CoreFeatures from './components/CoreFeatures'
import BattleRoyale from './components/BattleRoyale'
import RockSection from './components/RockSection'
import RevenueChartSection from './components/RevenueChartSection'
import InvestorReturnsSection from './components/InvestorReturnsSection'
import Interface from './components/Interface'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import FeatureSection from './components/FeatureSection'
import PsychologySection from './components/PsychologySection'
import RevenueSection from './components/RevenueSection'
import GrowthEngine from './components/GrowthEngine'

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden w-full">
      {/* <BackgroundElements /> */}
      <Header />
      <Hero />
      <CallToAction />
      <UnhingedSection />
      <FeatureSection/>
      <PsychologySection />
      <WhyExposed />
      <FloatingImage />
      <RevenueSection />
      <CoreFeatures />
      <GrowthEngine/>
      <BattleRoyale />
      <RockSection />
      <RevenueChartSection />
      <InvestorReturnsSection />
      <Interface />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
