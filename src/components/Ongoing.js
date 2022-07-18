import React from 'react'

function Ongoing({data,onArrowClick}) {
  return (
    <div> <ol>
    {data
      .filter((item) => item.status === "Ongoing")
      .map((ongoing) => {
        return (
          <li key={ongoing.id}>
            {ongoing.text}
            <button onClick={() => onArrowClick(ongoing.id, "todo")}>
              Left
            </button>
            <button onClick={() => onArrowClick(ongoing.id, "Done")}>
              Right
            </button>
          </li>
        );
      })}
  </ol></div>
  )
}

export default Ongoing