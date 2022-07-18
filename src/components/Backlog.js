import React from 'react'

function Backlog({data,onArrowClick}) {
  return (
    <div> <ol>
    {data
      .filter((item) => item.status === "backlog")
      .map((backlog) => {
        return (
          <li key={backlog.id}>
            {backlog.text}
            <button
              disabled
              onClick={() => onArrowClick(backlog.id, "backlog")}
            >
              Left
            </button>
            <button onClick={() => onArrowClick(backlog.id, "todo")}>
              Right
            </button>
          </li>
        );
      })}
  </ol></div>
  )
}

export default Backlog