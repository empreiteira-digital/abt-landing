import Image from 'next/image'

const CheckoutVersion1 = () => {
  return (
    <div className="checkout--wrapper">
      <div className="checkout--image">
        <Image
          src="/checkout-version2.png"
          alt="Checkout"
          width={900}
          height={100}
        />
      </div>
    </div>
  )
}

export default CheckoutVersion1
