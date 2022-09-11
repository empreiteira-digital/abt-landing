import Head from 'next/head'
import Header from '@/components/Header'
import SectionWrapper from '@/components/sections/SectionWrapper'
import CourseModules from '@/components/sections/CourseModules'
import FrequentAskedQuestions from '@/components/sections/FrequentAskedQuestions'
import Association from '@/components/sections/Association'
import Footer from '@/components/Footer'
import Versions from '@/components/sections/Versions'
import Approach from '@/components/sections/Approach'
import Practice from '@/components/sections/Practice'
import TeacherSlide from '@/components/sections/TeacherSlider'
import Course from '@/components/sections/Course'

const Home = () => {
  return (
    <main>
      <Head>
        <title>ABT Landing</title>
      </Head>
      <Header />
      <Course />
      <SectionWrapper />
      <Approach />
      <div className="bg-white">
        <hr className="bold-hr" />
      </div>
      <Practice />
      <Versions />
      <TeacherSlide />
      <Association />
      <CourseModules />
      <FrequentAskedQuestions />
      <Footer />
    </main>
  )
}

export default Home
