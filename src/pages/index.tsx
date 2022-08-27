import Head from 'next/head'
import SectionWrapper from '@/components/SectionWrapper'
import InsideTheCourse from '@/components/InsideTheCourse'
import FrequentAskedQuestions from '@/components/FrequentAskedQuestions'
import Association from '@/components/Association'

const Home = () => {
  return (
    <main>
      <Head>
        <title>ABT Landing</title>
      </Head>
      <SectionWrapper />
      <Association />
      <InsideTheCourse />
      <FrequentAskedQuestions />
    </main>
  )
}

export default Home
