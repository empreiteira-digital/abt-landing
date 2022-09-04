import Link from 'next/link'

type Props = {
  buttonText: string
}

const SubscribeButton: React.FC<Props> = ({ buttonText }) => {
  return (
    <div className="subscribe">
      <Link href="">
        <a>{buttonText}</a>
      </Link>
    </div>
  )
}

export default SubscribeButton
