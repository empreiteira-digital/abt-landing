import Image from 'next/image'
import SubscribeButton from '@/components/SubscribeButton'

const Association = () => {
  return (
    <section className="about--section">
      <div className="about--wrapper container mx-auto">
        <div className="about--logo">
          <Image
            src="/about-logo.png"
            alt="logo"
            width={800}
            height={600}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="about--description">
          <p>
            A <b>Associação Brasileira do Trauma</b> é uma entidade dedicada ao
            estudo, pesquisa, tratamento e prevenção dos efeitos do trauma.
          </p>
          <p>
            Formada principalmente por profissionais de saúde, todos
            especialistas ou em processo de especialização pelo método SE™ –
            Somatic Experiencing® de resolução de trauma, a Associação é uma
            comunidade fecunda, pulsante e investida na abrangência do tema.
          </p>
          <SubscribeButton buttonText="Quero me inscrever agora!" />
        </div>
      </div>
    </section>
  )
}

export default Association
