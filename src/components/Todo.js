import React from 'react'

function Todo({data,onArrowClick}) {
  return (
    <div>  <ol>
    {data
      .filter((item) => item.status === "todo")
      .map((todo) => {
        return (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => onArrowClick(todo.id, "backlog")}>
              Left
            </button>
            <button onClick={() => onArrowClick(todo.id, "Ongoing")}>
              Right
            </button>
          </li>
        );
      })}
  </ol></div>
  )
}

export default Todo