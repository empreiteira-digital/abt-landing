const FrequentAskedQuestions = () => {
  const questions = [
    {
      id: 10,
      question: 'Formas de pagamento',
      answer: ''
    },
    {
      id: 11,
      question: 'Desistências e cancelamentos',
      answer: ''
    },
    {
      id: 12,
      question: 'Reposições',
      answer: ''
    },
    {
      id: 13,
      question: 'Certificado SEP',
      answer: ''
    },
    {
      id: 14,
      question: 'Sessões individuais e supervisões',
      answer: ''
    },
    {
      id: 15,
      question: 'Política para mudanças de turmas',
      answer: ''
    },
    {
      id: 16,
      question: 'Valores e opções de pagamentos para módulos presenciais',
      answer: ''
    },
    {
      id: 17,
      question: 'Valores e opções de pagamentos para módulos online',
      answer: ''
    }
  ]
  return (
    <section id="questions">
      <h2 className="white-title">FAQ</h2>
      <div
        id="accordion-collapse"
        className="container collapse-section"
        data-accordion="collapse"
      >
        {questions.map((question) => (
          <div key={question.id}>
            <h2 id={`accordion-collapse-heading-${question.id}`}>
              <button
                type="button"
                className="collapse-title"
                data-accordion-target={`#accordion-collapse-body-${question.id}`}
                aria-expanded="false"
                aria-controls={`accordion-collapse-body-${question.id}`}
              >
                <span>{question.question}</span>
              </button>
            </h2>
            <div
              id={`accordion-collapse-body-${question.id}`}
              className="hidden"
              aria-labelledby={`accordion-collapse-heading-${question.id}`}
            >
              <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  {question.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FrequentAskedQuestions
