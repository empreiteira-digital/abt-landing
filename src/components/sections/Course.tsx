const Course = () => {
  return (
    <section className="course--section">
      <div className="course--wrapper container mx-auto flex flex-col items-center">
        <h3 className="white-title">
          <span className="font-semibold">Muito mais</span> que um simples
          curso. <br />
          Muito mais que um{' '}
          <span className="font-semibold">simples método.</span>
        </h3>
        <h4 className="w-fit mt-4 py-3 px-5 rounded-lg text-center text-2xl text-violeta bg-limao">
          Entrando na Formação em SE™, você terá acesso:
        </h4>
        <div className="course--box-wrapper">
          <div className="course--box even">
            <span className="font-semibold">Programa de Prevenção</span> a fim
            de capacitar mais e mais pessoas a prestar socorro em situações
            críticas, bem como a aprender a se proteger e a zelar pelo próprio
            equilíbrio em contextos de exposição ao trauma e a seus efeitos.
          </div>
          <div className="course--box">
            <span className="font-semibold">
              Profissionais Altamente Qualificados.
            </span>
            Formada principalmente por profissionais de saúde, todos
            especialistas ou em processo de especialização pelo método{' '}
            <span className="font-semibold">SE™ – Somatic Experiencing®</span>{' '}
            (Experiência Somática, em tradução livre)
          </div>
          <div className="course--box">
            <span className="font-semibold">Certificação internacional.</span>
            SEI (Somatic Experiencing® International) é o instituto
            norte-americano que detém os direitos de ensino e certificação deste
            método no mundo todo.
          </div>
          <div className="course--box">
            <span className="font-semibold">
              Professores praticantes do método.
            </span>
            Os associados da ABT são terapeutas praticantes de SE™, entre eles,
            professores do curso de formação, provedores e supervisores de
            sessões para certificação no método, assistentes de classe e alunos,
            que agregaram às suas competências profissionais o aprofundamento em
            um dos assuntos mais desafiadores, cruciais e urgentes da
            atualidade.
          </div>
          <div className="course--box">
            <span className="font-semibold">
              Profissionais altamente especializados.
            </span>
            Todos comprometidos em levar alívio e cura para pessoas que vieram a
            desenvolver o Transtorno de Estresse Pós-Traumático, nas mais
            variadas manifestações e intensidades sintomáticas que esse
            transtorno pode assumir.
          </div>
          <div className="course--box">
            <span className="font-semibold">Comunicação e Inovação.</span>
            Todos em um esforço conjunto de disseminar conhecimentos e
            informações, expandindo a compreensão e desfazendo mitos sobre o
            trauma.
          </div>
        </div>
      </div>
    </section>
  )
}

export default Course
