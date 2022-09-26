import React, { useState } from 'react'

type Props = {
  buttonText: string
}

const SubscribeButton: React.FC<Props> = ({ buttonText }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button
        className="subscribe"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {buttonText}
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[500px] my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Inscreva-se</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <iframe
                    src="/form.html"
                    title="Formulário"
                    width="100%"
                    height="650px"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default SubscribeButton
