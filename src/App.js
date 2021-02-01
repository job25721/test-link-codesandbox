import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Header";

function Footer() {
  return <h1>This is Footer</h1>;
}

function App() {
  const [counter, setCounter] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [todoInput, setTodo] = useState("");
  useEffect(() => {
    console.log("conter changed " + counter);
  }, [counter]);

  const addCounter = () => {
    setCounter(counter + 1);
  };
  const decreseCounter = () => {
    if (counter > 0) setCounter(counter - 1);
  };
  const resetCounter = () => {
    setCounter(0);
  };

  const addTodo = () => {
    let no;
    if (tableData.length === 0) {
      no = 1;
    } else {
      no = tableData[tableData.length - 1].no + 1;
    }
    const newTodo = {
      no,
      todo: todoInput
    };
    // const arr = [
    //   {no : 10 , todo:"hello"},
    //   {no : 15 , todo:"hello world"},
    // ]

    // const newerTodoArr = arr.map(data=>{
    //   if(data.no === 10) {
    //     return {...data,todo:"hello"}
    //   }
    //   return data
    // })

    setTableData([...tableData, newTodo]);
    setTodo("");
  };
  return (
    <>
      <Header />
      {counter}
      <br />

      <button onClick={addCounter}>+</button>
      <button onClick={decreseCounter}>-</button>
      <button onClick={resetCounter}>Reset</button>
      <p>Job pathomporn</p>
      <h1>This is my todos table</h1>
      {tableData.length > 0 ? (
        <table>
          <thead>
            <th>NO</th>
            <th>todo</th>
          </thead>
          <tbody>
            {tableData.map((data) => (
              <tr key={data.no}>
                <td>{data.no}</td>
                <td>{data.todo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
      <input
        value={todoInput}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="add todo"
      />
      <button onClick={addTodo}>add todo</button>
      <Footer />
    </>
  );
}

export default App;
