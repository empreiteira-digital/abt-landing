import Image from 'next/image'
import { Plus } from 'phosphor-react'
import clsx from 'clsx'

const CourseModules = () => {
  const modules = [
    {
      id: 1,
      title: 'Iniciante 1, 2 e 3',
      image: '/modules/modulo-1.png',
      mediaScreen: {
        default: {
          width: 'w-[100%]',
          height: 'min-h-[376px]'
        },
        lg: {
          width: 'w-[100%]',
          height: 'lg:min-h-[1230px]'
        }
      }
    },
    {
      id: 2,
      title: 'Intermediário 1, 2 e 3',
      image: '/modules/modulo-2.png',
      mediaScreen: {
        default: {
          width: 'w-[100%]',
          height: 'min-h-[350px]'
        },
        lg: {
          width: 'w-[100%]',
          height: 'lg:min-h-[1137px]'
        }
      }
    },
    {
      id: 3,
      title: 'Avançado 1 e 2',
      image: '/modules/modulo-3.png',
      mediaScreen: {
        default: {
          width: 'w-[100%]',
          height: 'min-h-[300px]'
        },
        lg: {
          width: 'w-[100%]',
          height: 'lg:min-h-[940px]'
        }
      }
    }
  ]

  return (
    <section id="inside">
      <h2 className="title">Por dentro do curso</h2>
      <hr className="custom-hr" />
      <div
        id="accordion-collapse"
        className="collapse-section"
        data-accordion="collapse"
      >
        {modules.map((step) => (
          <div key={step.id}>
            <h2 id={`accordion-collapse-heading-${step.id}`}>
              <button
                type="button"
                className="inside--collapse-title"
                data-accordion-target={`#accordion-collapse-body-${step.id}`}
                aria-expanded="false"
                aria-controls={`accordion-collapse-body-${step.id}`}
              >
                <span>{step.title}</span>
                <Plus size={32} />
              </button>
            </h2>
            <div
              id={`accordion-collapse-body-${step.id}`}
              className="hidden"
              aria-labelledby={`accordion-collapse-heading-${step.id}`}
            >
              <div
                className={clsx(
                  'inside--accordion-expanded min-h-[300px] relative text-center m-auto mb-6',
                  step.mediaScreen.default.width,
                  step.mediaScreen.default.height,
                  step.mediaScreen.lg.width,
                  step.mediaScreen.lg.height
                )}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CourseModules
