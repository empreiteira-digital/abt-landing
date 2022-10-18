import SubscribeButton from '@/components/SubscribeButton'

const Practice = () => {
  return (
    <section className="practice bg-white text-violeta pt-32 pb-16">
      <div className="relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5 text-center">
        <h2 className="title">Quem pode praticar SE™?</h2>
        <hr className="custom-hr" />
        <p className="font-xl mt-8 max-w-[800px]">
          <b>
            Profissionais de diversas áreas podem participar dos treinamentos e
            atuar como Praticantes de Somatic Experiencing (SEP).
          </b>
        </p>
        <p className="font-xl mt-3 mb-16 max-w-[800px]">
          A abordagem SE™ é uma ferramenta poderosa para quem já trabalha com
          atividades que lidam com o trauma, como terapeutas e psicólogos, mas
          também para os profissionais de saúde em geral, como médicos,
          enfermeiros, fisioterapeutas, terapeutas ocupacionais, fonoaudiólogos,
          pedagogos, assistentes sociais, e outros profissionais que lidam com
          situações traumáticas e/ou com pessoas traumatizadas ou com potencial
          de traumatização.
        </p>
        <div className="wrapper">
          <SubscribeButton buttonText="Tenho interesse e quero ver a agenda de cursos" />
        </div>
      </div>
    </section>
  )
}

export default Practice
