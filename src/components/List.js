import React from 'react'

function List({ data, status,right,left, rightDisabled, leftDisabled, onArrowClick }) {
    return (
        <div>
            <h1>{status}</h1> 
            <ol>
            {data
                .filter((item) => item.status === status)
                .map((backlog) => {
                    return (
                        <li key={backlog.id}>
                            {backlog.text}
                            <button
                                disabled={leftDisabled}
                                onClick={() => onArrowClick(backlog.id, left)}
                            >
                                Left
                            </button>
                            <button
                                disabled={rightDisabled}
                                onClick={() => onArrowClick(backlog.id, right)}>
                                Right
                            </button>
                        </li>
                    );
                })}
        </ol></div>
    )
}

export default List