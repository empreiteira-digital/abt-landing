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
import WhatsApp from '@/components/WhatsApp'

const Home = () => {
  return (
    <main className="relative">
      <Head>
        <title>
          Formação Somatic Experiencing® - Associação Brasileira do Trauma -
          Curso Trauma Psciológico - Trauma Emocional
        </title>
        <meta
          name="description"
          content="A ABT é a única entidade autorizada pelo SEI a ensinar o método Somatic Experiencing® no Brasil. SEI (Somatic Experiencing® International) é o instituto norte-americano que detém os direitos de ensino e certificação deste método no mundo todo.
"
        />
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
      <WhatsApp />
    </main>
  )
}

export default Home
