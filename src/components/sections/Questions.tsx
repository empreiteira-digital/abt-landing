import useCollapse from 'react-collapsed'

const Questions = ({ question, answer }) => {
  const { getCollapseProps, getToggleProps } = useCollapse()

  return (
    <div>
      <h2>
        <button type="button" className="collapse-title" {...getToggleProps()}>
          <span>{question}</span>
        </button>
      </h2>
      <div {...getCollapseProps()}>
        <div
          className="question--answer"
          dangerouslySetInnerHTML={{ __html: answer }}
        ></div>
      </div>
    </div>
  )
}

export default Questions
