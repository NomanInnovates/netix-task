import React from 'react'

function Done({data,onArrowClick}) {
  return (
    <div> <ol>
    {data
      .filter((item) => item.status === "Done")
      .map((done) => {
        return (
          <li key={done.id}>
            {done.text}
            <button onClick={() => onArrowClick(done.id, "Ongoing")}>
              Left
            </button>
            <button
              disabled
              onClick={() => onArrowClick(done.id, "Done")}
            >
              Right
            </button>
          </li>
        );
      })}
  </ol></div>
  )
}

export default Done