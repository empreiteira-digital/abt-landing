import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const TeacherSlide = () => {
  const teachers = [
    {
      id: 1,
      name: 'Carlos Melo',
      biography:
        '<p>Psicólogo clínico, Doutor em Saúde Coletiva (IMS/ UERJ) e SEP (Somatic Experiencing® Practitioner). Carlos é provedor e supervisor individual e de grupo em todos os níveis, e professor de Iniciante e Intermediário do curso de formação em SE.</p> <p>É também psicoterapeuta corporal de formação com base na Análise Bioenergética, no Sistema Rio Abierto (movimento, massagem e meditação) e no EMDR. Em formação em Hakomi/MatrixWorks.</p>'
    },
    {
      id: 2,
      name: 'Cornélia Rossi',
      biography:
        '<p>Conselheira Fiscal Suplente da Associação Brasileira do Trauma, Cornélia é bióloga, com mestrado em Biologia, psicóloga clínica, com doutorado em Psicologia, rolfista, RPGista e SEP (Somatic Experiencing® Practitioner). É professora do curso de formação em SE nos níveis Iniciante e Intermediário (no Brasil e no exterior), e provedora e supervisora individual e de grupo em todos os níveis. Foi uma das fundadoras da SE Brasil e da ABT e membro da diretoria da ABT em diversas funções desde sua fundação, tendo sido diretora presidente no triênio 2013-2016. Foi gerente e coordenadora de pesquisas na Pfizer, membro da diretoria do RISI (Rolfing Institute of Structural Integration) e do SETI (Somatic Experiencing® Trauma Institute).</p>'
    },
    {
      id: 3,
      name: 'Éfu Nyaki',
      biography:
        '<p>Formada em Pedagogia da Ciência na Tanzânia, trabalhou como professora no ensino superior durante 3 anos. Estudou Teologia, Justiça e Paz nos EUA, e se formou em vários cursos de terapia holística no Brasil, fundando uma ONG na comunidade da periferia de João Pessoa (PB). É SEP (Somatic Experiencing® Practitioner), professora do curso de formação nos níveis Iniciante e Intermediário (no Brasil e no exterior), provedora e supervisora individual e de grupo em todos os níveis.</p>'
    },
    {
      id: 4,
      name: 'Irene Tranjtenberg',
      biography:
        '<p>Psicóloga clínica, formada em Orgonoterapia Caractero-Analítica com o próprio Federico Navarro, Irene tem 15 anos de experiência em massagem reichiana, e é também formada em EMDR, atuando como facilitadora dos treinamentos deste método. É SEP (Somatic Experiencing® Practitioner), professora dos níveis Iniciante e Intermediário do curso de formação em SE, bem como provedora e supervisora individual e em grupo em todos os níveis.</p>'
    }
  ]

  return (
    <section className="bg-white pt-16 pb-16">
      <div className="relative max-w-7xl mx-auto px-4 pb-4 focus:outline-none sm:px-3 md:px-5">
        <h2 className="title">Professores</h2>
        <hr className="custom-hr" />
        <Swiper
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {teachers.map((teacher) => (
            <SwiperSlide
              key={teacher.id}
              className="shadow-xl px-6 py-8 rounded-3xl text-center text-violeta"
            >
              <h4 className="text-2xl font-semibold mb-2">{teacher.name}</h4>
              <div
                dangerouslySetInnerHTML={{ __html: teacher.biography }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default TeacherSlide
