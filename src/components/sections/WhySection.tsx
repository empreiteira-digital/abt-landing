import CheckoutVersion2 from '../CheckoutV2'
import SubscribeButton from '../SubscribeButton'

const WhySection = () => {
  return (
    <section className="why">
      <h2 className="white-title mb-1">Por que fazer o curso?</h2>
      <h3 className="white-subtitle">Você entende o que é trauma?</h3>

      <div className="px-4">
        <div className="why--description">
          <p>
            O <b>trauma</b> pode começar como um estresse <b>intenso</b> que
            surge em situações percebidas como de <b>potencial ameaça</b> à
            vida, como acidentes, procedimentos médicos invasivos, abuso sexual,
            físico ou emocional, situações de negligência, guerras, desastres
            naturais, perdas, trauma de nascimento, ou situações estressantes
            recorrentes de medo e conflitos que vão se acumulando{' '}
            <b>com o tempo.</b>
          </p>
        </div>
      </div>

      <div className="wrapper mt-8 mb-4">
        <SubscribeButton buttonText="Quero me inscrever agora!" />
      </div>
      <div className="bg-violeta pt-6 pb-4 px-4 lg:px-0 flex items-center justify-center">
        <CheckoutVersion2 />
      </div>
    </section>
  )
}

export default WhySection
