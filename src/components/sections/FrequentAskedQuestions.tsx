import Questions from './Questions'

const FrequentAskedQuestions = () => {
  const faqs = [
    {
      id: 10,
      question: 'Formas de pagamento',
      answer:
        '<p>A. Com desconto: Valor válido somente para inscrições pagas à vista, até 30 dias antes do início do módulo.</p><p>B. Sem desconto: Valor válido para inscrições pagas após o prazo do desconto ou para parcelamento em qualquer tempo.</p><p>1. À vista:<ul><li>- Cartão de crédito/débito do sistema Cielo**;</li><li>- Depósito/transferência/Pix Banco Itaú;</li><li>- Boleto ou cartão de crédito do sistema PagSeguro*.</li></ul><p><p>2. Parcelado em até 6 vezes, sem juros, no cartão de crédito do sistema Cielo**.</p><p>3. Parcelado em até 18 vezes, com juros, no cartão de crédito do sistema PagSeguro*.<p>Bandeiras aceitas:</p><p>* Aceita Visa, Mastercard, ELO e Diners</p><p>*** Aceita Visa, Mastercard, ELO, Diners, Ourocard, AMEX, Hipercard e outros</p>'
    },
    {
      id: 11,
      question: 'Desistências e cancelamentos',
      answer:
        '<p>O aluno que se inscreveu, pagou e desistiu de participar de um determinado módulo pode solicitar o cancelamento da inscrição, devendo requerê-lo, por escrito, em até 07 dias antes da ocorrência do primeiro dia de aula. Neste caso, a ABT retém 20% do valor da inscrição para pagamento de despesas administrativas. O restante será restituído ao aluno por meio de depósito bancário na conta da Pessoa Física ou Jurídica que realizou o pagamento</p><p>O aluno pode ainda optar por deixar o valor como crédito para a inscrição de um próximo módulo, desde que comunique a Administração da ABT, por escrito, dentro do prazo de 7 dias antes do início do curso. No caso de o valor ficar como crédito, o mesmo ficará disponível integralmente para o próximo módulo que o aluno escolher participar.</p><p>Em caso de falta sem aviso prévio e sem justificativa, o aluno não terá restituição de parte do valor pago pela inscrição e nem poderá deixá-lo como crédito para um módulo futuro. Se o aluno faltar sem aviso prévio mas tiver um documento que comprove a falta (atestado médico próprio, certificado de óbito de parente próximo ou cancelamento de voo por parte da companhia aérea), poderá fazer a reposição do módulo que perdeu ou se inscrever para um módulo normal em data futura ou em outra localidade.</p>'
    },
    {
      id: 12,
      question: 'Reposições',
      answer:
        '<p>O aluno que avisou com antecedência que não poderia fazer o módulo ou apresentou justificativa comprovada para sua falta pode fazer uma reposição para o módulo que perdeu. A reposição deverá ser tratada diretamente com o coordenador local do curso. O valor da reposição é o valor sem desconto. Caso o aluno tenha pagado o valor com desconto e quiser fazer a reposição, deverá acertar a diferença com o Financeiro da ABT.</p><p>No caso de cancelamento ou adiamento do módulo por parte da ABT, o aluno tem o direito de solicitar a restituição integral do valor pago, sendo reembolsado por depósito na conta corrente da Pessoa Física ou Jurídica que realizou o pagamento de sua inscrição. O aluno também pode solicitar ao Financeiro da ABT que o valor pago fique como crédito integral para inscrição do mesmo módulo em data futura ou em outra localidade.</p>'
    },
    {
      id: 13,
      question: 'Certificado SEP',
      answer:
        '<p>O certificado de Praticante de Somatic Experiencing® (SEP) é fornecido pelo Somatic Experiencing® International (SEI), com sede nos EUA, mediante o cumprimento de todos os créditos exigidos no programa de formação em SE™. O certificado de SEP não licencia o aluno para a prática clínica de psicoterapia ou de terapia corporal. Esta licença segue as regras dos órgãos educacionais credenciados e das leis governamentais de cada estado e/ou país no qual o aluno pretende atuar.</p>'
    },
    {
      id: 14,
      question: 'Sessões individuais e supervisões',
      answer:
        '<p>Todas as sessões individuais e supervisões de SE são conduzidas por profissionais certificados como SEP e oficialmente habilitados pela ABT para estas funções. O custo das sessões individuais e das supervisões não está incluso nos valores da formação em SE™ realizada pela ABT, e deve ser negociado com, e pago diretamente ao profissional escolhido.<p><p>Para contabilização dos créditos de supervisão, 3 horas de supervisão em grupo são equivalentes a 1 hora de crédito. No mínimo 4 horas devem ser destinadas à supervisão individual e pelo menos 6 horas devem ser feitas com professor de SE™. É da responsabilidade de cada estudante registrar corretamente as sessões e supervisões, recolher as assinaturas de cada profissional aprovado pela ABT e enviar estes registros para a Administração, com sede em São Paulo, capital, para posteriormente receber o certificado de SEP emitido pelo SEI.</p>'
    },
    {
      id: 15,
      question: 'Política para mudanças de turmas',
      answer:
        '<p>Caso o aluno tenha necessidade de mudar de turma, este deverá fazer contato com a coordenadora de sua classe em que está inscrito, solicitando a transferência e justificando o motivo da sua solicitação. A solicitação será avaliada pelos professores e coordenadores das classes envolvidas em conjunto com a diretoria. Essa análise levará em consideração a presença adequada no módulo imediatamente anterior, deverá respeitar o intervalo de pelo menos 60 dias entre níveis/módulos e capacidade da turma desejada, seja quórum, número técnico didático permitido na classe ou capacidade do local (se presencial) da classe em formação solicitada. Caso um pedido de mudança de turma não seja julgado viável por quaisquer dos motivos acima, a ABT comunicará ao aluno da decisão, podendo o aluno realizar nova tentativa para o próximo módulo pertinente disponível do treinamento da ABT. Ao aluno fica vedada a inscrição no site na classe solicitada enquanto não houver o deferimento de sua solicitação. </p>'
    }
  ]
  return (
    <section id="questions">
      <h2 className="white-title font-bold">FAQ</h2>
      <div
        id="accordion-collapse"
        className="collapse-section"
        data-accordion="collapse"
      >
        {faqs.map((faq) => (
          <Questions key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  )
}

export default FrequentAskedQuestions
