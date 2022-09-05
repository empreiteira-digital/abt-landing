import Image from 'next/image'
import SubscribeButton from '@/components/SubscribeButton'
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

const Header = () => {
  return (
    <section className="header--section">
      <div className="header--wrapper container mx-auto">
        <div className="header--logo">
          <Image src="/about-logo.png" alt="logo" width={400} height={119} />
        </div>
        <div className="header--heading">
          <h1>Inscreva-se na formação</h1>
          <h2 className="uppercase">Método Somatic Experiencing</h2>
          <p className="max-w-[700px]">
            Assista o vídeo e saiba mais sobre o Método e como ele pode
            contribuir para a sua vida e a de seus clientes.
          </p>
          <div className="flex justify-center my-8">
            <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
          </div>
          <p className="max-w-[700px] mb-4">
            Entre Agora e entenda como o Método SE se aplica terapeuticamente
          </p>
          <SubscribeButton buttonText="Começar minha jornada" />
        </div>
      </div>
    </section>
  )
}

export default Header
