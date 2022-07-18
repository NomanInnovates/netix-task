import React, { useState } from "react";
import List from "./components/List";

function App() {
  const [data, setdata] = useState([]);
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    e.preventDefault()
    if (!input) {
      alert("input is empty")
      return
    }
    let id = Math.round(Math.random() * 1000);
    let todoObj = {
      id: id,
      text: input,
      status: "Todo",
    };
    setdata([...data, todoObj]);
    setInput("");
  };
  const onArrowClick = (id, status) => {
    let updateArr = data.map((x) =>
      x.id === id ? { ...x, status: status } : x
    );
    setdata(updateArr);
  };
  return (
    <div>
      <form onSubmit={inputHandler} className="inputForm">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}

        />
        <button>Add Todo</button>
      </form>
      <div className="TodoDiv">
        <div>
          <List status="Backlog" data={data} onArrowClick={onArrowClick} right={"Todo"} left={"Backlog"} leftDisabled />
        </div>
        <div>

          <List status="Todo" data={data} onArrowClick={onArrowClick} right={"Ongoing"} left={"Backlog"} />
        </div>
        <div>
          <List status="Ongoing" data={data} onArrowClick={onArrowClick} right={"Done"} left={"Todo"} />

        </div>
        <div>
          <List status="Done" data={data} onArrowClick={onArrowClick} right={"Done"} left={"Ongoing"} rightDisabled />
        </div>
      </div>
    </div>
  );
}

export default App;
