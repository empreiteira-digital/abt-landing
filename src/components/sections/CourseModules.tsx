import Module from './Module'

const CourseModules = () => {
  const modules = [
    {
      id: 1,
      title: 'Iniciante 1, 2 e 3',
      image: '/images/modules/modulo-1.png',
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
      image: '/images/modules/modulo-2.png',
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
      image: '/images/modules/modulo-3.png',
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
          <Module
            key={step.id}
            mediaScreen={step.mediaScreen}
            title={step.title}
            image={step.image}
          />
        ))}
      </div>
    </section>
  )
}

export default CourseModules
