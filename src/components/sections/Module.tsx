import useCollapse from 'react-collapsed'
import Image from 'next/image'
import { Plus, Minus } from 'phosphor-react'
import clsx from 'clsx'

const Module = ({ title, image, mediaScreen }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  return (
    <div>
      <h2>
        <button
          type="button"
          className="inside--collapse-title"
          {...getToggleProps()}
        >
          <span>{title}</span>
          {isExpanded ? <Plus size="32" /> : <Minus size={32} />}
        </button>
      </h2>
      <div {...getCollapseProps()}>
        <div
          className={clsx(
            'inside--accordion-expanded min-h-[300px] relative text-center m-auto mb-6',
            mediaScreen.default.width,
            mediaScreen.default.height,
            mediaScreen.lg.width,
            mediaScreen.lg.height
          )}
        >
          <Image src={image} alt={title} layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  )
}

export default Module
