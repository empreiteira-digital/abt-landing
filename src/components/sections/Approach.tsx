import SubscribeButton from '@/components/SubscribeButton'

const Approach = () => {
  return (
    <section className="bg-white pt-16 pb-16">
      <div className="relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5">
        <h2 className="title">Como a abordagem SE atua?</h2>
        <hr className="custom-hr" />
        <div className="cards grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 py-10">
          <div className="approach-text">
            <b>O método Somatic Experiencing®</b> (em tradução livre,
            Experiência Somática) entende que o trauma não é causado pelo evento
            em si, mas que se desenvolve por uma incapacidade do corpo, da mente
            e do sistema nervoso de processar estes eventos estressantes.
          </div>
          <div className="approach-text">
            A abordagem SE™ atua sobre o
            <b>comportamento do sistema nervoso autônomo</b>, por meio da
            conscientização das sensações corporais relacionadas à situação
            traumática.
          </div>
          <div className="approach-text">
            O cliente expressa e libera, gradualmente e de forma segura, a
            hiperativação das energias de sobrevivência que permaneceram presas
            após o evento que ocasionou o trauma. Desta forma, o cliente pode
            encontrar <b>um novo significado para seu sofrimento</b>,
            restaurando assim seu equilíbrio interno, melhorando sua resiliência
            a situações futuras estressantes, aumentando sua vitalidade e
            capacidade de se engajar nas atividades da vida.
          </div>
        </div>
        <div className="wrapper">
          <SubscribeButton buttonText="Quero me inscrever agora!" />
        </div>
      </div>
    </section>
  )
}

export default Approach
