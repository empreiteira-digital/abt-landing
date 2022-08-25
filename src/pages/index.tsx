import Head from 'next/head'
import InsideTheCourse from '@/components/InsideTheCourse'
import FrequentAskedQuestions from '@/components/FrequentAskedQuestions'

const Home = () => {
  return (
    <main>
      <Head>
        <title>ABT Landing</title>
      </Head>
      <InsideTheCourse />
      <FrequentAskedQuestions />
    </main>
  )
}

export default Home
