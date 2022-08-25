import { Plus } from 'phosphor-react'

const InsideTheCourse = () => {
  const steps = [
    {
      id: 1,
      title: 'Iniciante 1, 2 e 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adip  odios et  justo.'
    },
    {
      id: 2,
      title: 'Intermediário 1, 2 e 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adip  odios et  justo.'
    },
    {
      id: 3,
      title: 'Avançado 1 e 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adip  odios et  justo.'
    }
  ]

  return (
    <section id="inside">
      <h2 className="inside--title">Por dentro do curso</h2>
      <hr className="custom-hr" />
      <div
        id="accordion-collapse"
        className="container collapse-section"
        data-accordion="collapse"
      >
        {steps.map((step) => (
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
              <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default InsideTheCourse
