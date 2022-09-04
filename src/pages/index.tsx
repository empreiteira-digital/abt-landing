import Head from 'next/head'
import Header from '@/components/Header'
import SectionWrapper from '@/components/sections/SectionWrapper'
import InsideTheCourse from '@/components/sections/InsideTheCourse'
import FrequentAskedQuestions from '@/components/sections/FrequentAskedQuestions'
import Association from '@/components/sections/Association'
import Footer from '@/components/Footer'
import Versions from '@/components/sections/Versions'
import Approach from '@/components/sections/Approach'
import Practice from '@/components/sections/Practice'

const Home = () => {
  return (
    <main>
      <Head>
        <title>ABT Landing</title>
      </Head>
      <Header />
      <SectionWrapper />
      <Approach />
      <div className="bg-white">
        <hr className="bold-hr" />
      </div>
      <Practice />
      <Versions />
      <Association />
      <InsideTheCourse />
      <FrequentAskedQuestions />
      <Footer />
    </main>
  )
}

export default Home
