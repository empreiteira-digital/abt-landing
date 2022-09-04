import Head from 'next/head'
import Header from '@/components/Header'
import SectionWrapper from '@/components/SectionWrapper'
import InsideTheCourse from '@/components/InsideTheCourse'
import FrequentAskedQuestions from '@/components/FrequentAskedQuestions'
import Association from '@/components/Association'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <main>
      <Head>
        <title>ABT Landing</title>
      </Head>
      <Header />
      <SectionWrapper />
      <Association />
      <InsideTheCourse />
      <FrequentAskedQuestions />
      <Footer />
    </main>
  )
}

export default Home
