import Image from 'next/image'

const CheckoutVersion2 = () => {
  return (
    <div className="checkout--wrapper">
      <div className="checkout--image">
        <Image
          src="/images/checkout-v2.png"
          alt="Checkout"
          width={500}
          height={55}
        />
      </div>
    </div>
  )
}

export default CheckoutVersion2
