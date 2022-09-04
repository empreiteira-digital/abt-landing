import Image from 'next/image'

const Footer = () => {
  return (
    <section className="footer--section">
      <div className="footer--wrapper container mx-auto">
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
        <div className="footer--social-medias">Social medias</div>
      </div>
    </section>
  )
}

export default Footer
