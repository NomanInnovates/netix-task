import React from 'react'

function List({ data, status, right, left, rightDisabled, leftDisabled, onArrowClick }) {
    return (
        <div>
            <h1>{status}</h1>
            <ul>
                {data
                    .filter((item) => item.status === status)
                    .map((backlog) => {
                        return (
                            <li key={backlog.id}>
                                <span>

                                    {backlog.text}
                                </span>
                                <span>

                                    <button
                                        disabled={leftDisabled}
                                        onClick={() => onArrowClick(backlog.id, left)}
                                    >
                                       ← 
                                    </button>
                                    <button
                                        disabled={rightDisabled}
                                        onClick={() => onArrowClick(backlog.id, right)}>
                                        →
                                    </button>
                                </span>
                            </li>
                        );
                    })}
            </ul>
        </div>
    )
}

export default List