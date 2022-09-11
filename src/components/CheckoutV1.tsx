import Image from 'next/image'

const CheckoutVersion1 = () => {
  return (
    <div className="checkout--wrapper">
      <div className="checkout--image">
        <Image src="/checkout-v1.png" alt="Checkout" width={900} height={80} />
      </div>
    </div>
  )
}

export default CheckoutVersion1
