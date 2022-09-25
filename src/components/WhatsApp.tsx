import { WhatsappLogo } from 'phosphor-react'
import Link from 'next/link'

const WhatsApp = () => {
  return (
    <div className="fixed bottom-2 right-2 text-white bg-[#39E161] p-2 rounded-lg">
      <Link href="">
        <a>
          <WhatsappLogo size={40} />
        </a>
      </Link>
    </div>
  )
}

export default WhatsApp
