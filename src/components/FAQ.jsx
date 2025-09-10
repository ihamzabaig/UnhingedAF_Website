import { useState } from 'react'
import { IoAdd, IoRemove } from 'react-icons/io5'
import minus from '../assets/minus.png'
import plus from '../assets/plus.png'
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "What Makes EXPOSED Different From Tinder, Hinge, Or Bumble ?",
      answer: "Traditional dating apps are repetitive — swipe left, swipe right, hope for a match. EXPOSED breaks the mold with rooms, bold stat-based profiles, gamified competition (Battle Royale), and even ways for users to earn money through content and referrals."
    },
    {
      question: "Is EXPOSED Safe For Users ?",
      answer: "Yes. Every user is age-verified (18+ only), bios are auto-moderated with a keyword banlist, and reporting tools are built in. No nudity or explicit content is allowed in Phase 1. We’re bold, but we keep it safe."
    },
    {
      question: "Can Users Actually Make Money On EXPOSED ?",
      answer: "Absolutely. Users can earn through:<br/> PPV Content: Lock exclusive photos/videos for purchase.<br/>Creator Promo System:* Get paid to post viral skits on TikTok, IG, Reddit, etc.<br/>Referral Earnings (Phase 2): Earn a % of spend from users you bring in.<br/>EXPOSED is the first dating app where *users and the platform both profit*."
    },
    {
      question: "How Does The Creator Promo System Work ?",
      answer: "Inside the Earnings Tab, users find a “Skit Vault” with ready-made viral templates. They post these skits on their socials with a unique tracking link. For every 1,000 verified views, they earn about $1 CPM. Top creators get leaderboard recognition and higher payouts."
    },
    {
      question: "What Is The Battle Royale Mode ?",
      answer: "It's dating turned into a game. Each day, 200 players (100 men, 100 women) compete to climb a leaderboard based on likes and engagement. The top 10 get spotlight visibility, and the #1 male and female each win $100 cash + glow status."
    },
    {
      question: "How Does Monetization Work For The App Itself ?",
      answer: "Revenue comes from multiple streams: Weekly Creator+ subscriptions, Boosts for higher visibility, Paid glow effects, PPV content sales (platform takes a cut), and Referral & promo systems driving viral adoption. This multi-layered monetization strategy creates both short-term revenue and long-term scalability."
    },
    {
      question: "Who Is EXPOSED Built For ?",
      answer: "Gen Z (ages 18–30). They're bold, hyper-social, and thrive on TikTok-style virality. EXPOSED speaks their language — unapologetic, competitive, and fun."
    },
    {
      question: "How Do You Prevent Fake Traffic In The Creator Promo System ?",
      answer: "Our backend filters out low-retention or fake traffic. Only verified real views count toward earnings. This protects both the platform and advertisers/investors."
    },
    {
      question: "When Is EXPOSED Launching ?",
      answer: "Phase 1 is currently in development. With investor support, we'll complete the build, launch closed beta, and roll out to key Gen Z-heavy cities for early adoption."
    },
    {
      question: "Why Should Investors Back EXPOSED Now ?",
      answer: "Because the dating app industry is massive ($10B+) but stagnant. Gen Z wants more than swipes — they want culture, clout, and cash. EXPOSED is positioned as the first viral, gamified, monetized dating app. Investing now means entering before the cultural wave breaks."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 align-middle">
      <div className="max-w-4xl w-full">

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h1>
        </div>
        <div style={{ justifyContent: 'center', alignItems: 'center' }} className='flex justify-center'>

          <div style={{ justifyContent: 'center', alignItems: 'center', width: '70%', marginBottom: '10px' }} className="space-y-4 flex flex-col items-center">
            {faqs.map((faq, index) => (
              <div

                style={{backgroundColor:"rgba(27, 26, 26, 0.3)", marginBottom: '20px', borderRadius: 12, justifyContent: 'center', alignItems: 'center', paddingLeft: 10, borderColor: 'grey' ,height: openIndex === index ? "200px" : "70px",}}
                key={index}
                className={`rounded-lg w-full max-w-3xl border border-gray-600 ${openIndex === index ? "bg-gray-800" : "bg-gray-700"
                  }`}
              >
                <div className="px-6 py-6 flex items-start justify-between">
                  <div className="flex-1 pr-6">
                    <div style={{ fontSize: '20px', fontWeight: '500' ,marginLeft:30,marginTop:10}} className="text-white font-medium mb-3 text-lg">{faq.question}</div>
                    {openIndex === index && (
                      <div style={{marginLeft:30,marginTop:10}} className="text-gray-300 text-base leading-relaxed">{faq.answer}</div>
                    )}
                  </div>
                  <button
                    className="rounded flex items-center justify-center flex-shrink-0 hover:opacity-80 transition-opacity mt-1"
                    style={{
                      backgroundColor: openIndex === index ? "rgba(206, 255, 3, 0.94)" : "transparent",
                      height: "40px",
                      width: "40px",
                      border: "none",     
                      outline: "none",     
                      boxShadow: "none",
                    }}
                    onClick={() => toggleFAQ(index)}
                  >
                    {openIndex === index ? (
                      <img src={minus} alt="minus" className="w-4 h-4"  />
                    ) : (
                      <img src={plus} alt="plus" className="flex w-2 h-2" style={{height:40,padding:10,marginTop:30,marginRight:20}}/>
                    )}
                  </button>

                </div>
              </div>
            ))}
          </div>
        </div>
        {/* FAQ Items */}
      </div>
    </section>
  )
}

export default FAQ
