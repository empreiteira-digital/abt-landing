import { WhatsappLogo } from 'phosphor-react'
import Link from 'next/link'

const WhatsApp = () => {
  return (
    <div className="fixed bottom-2 right-2 text-white bg-[#39E161] p-2 rounded-lg z-[1000]">
      <Link href="https://api.whatsapp.com/send?phone=5511983533469">
        <a target="_blank" rel="noopener noreferrer">
          <WhatsappLogo size={40} />
        </a>
      </Link>
    </div>
  )
}

export default WhatsApp
