import Image from 'next/image'
import SubscribeButton from '@/components/SubscribeButton'
import CheckoutVersion1 from '@/components/CheckoutV1'

const Versions = () => {
  return (
    <section className="version--section">
      <div className="version--wrapper container mx-auto">
        <h3>Como acontecem os cursos?</h3>
        <div className="version--image">
          <Image
            src="/images/image-course-version.png"
            alt="logo"
            width={700}
            height={220}
          />
        </div>
        <p>
          Preencha o formulário para que o coordenador informe sobre as
          possibilidades.
        </p>
        <div className="wrapper">
          <SubscribeButton buttonText="Quero me inscrever agora!" />
          <div className="mt-4">
            <CheckoutVersion1 />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Versions
