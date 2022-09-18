import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <section className="footer--section">
      <div className="footer--wrapper">
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
        <div className="footer--social-medias flex gap-2">
          <Link href="https://www.facebook.com/traumatemcura">
            <a>
              <Image
                src="/icons/fb.png"
                alt="logo"
                width={80}
                height={80}
                objectFit="contain"
              />
            </a>
          </Link>

          <Link href="https://www.instagram.com/traumatemcura/">
            <a>
              <Image
                src="/icons/ig.png"
                alt="logo"
                width={80}
                height={80}
                objectFit="contain"
              />
            </a>
          </Link>

          <Link href="https://www.youtube.com/channel/UCUITWsln8F-FlrauMq1x61Q">
            <a>
              <Image
                src="/icons/yt.png"
                alt="logo"
                width={80}
                height={80}
                objectFit="contain"
              />
            </a>
          </Link>

          <Link href="">
            <a>
              <Image
                src="/icons/lkdn.png"
                alt="logo"
                width={80}
                height={80}
                objectFit="contain"
              />
            </a>
          </Link>

          <Link href="">
            <a>
              <Image
                src="/icons/google.png"
                alt="logo"
                width={80}
                height={80}
                objectFit="contain"
              />
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Footer
