import { useReducer } from "react";
import { useState } from "react";

const todoList = [];

function reducer(state, { type, payload }) {
  switch (type) {
    case "createTodo":
      return [...state, payload];

    case "deleteTodo":
      return state.filter((todo) => todo.id !== payload);

    case "toggleTodo":
      return state.map((todo) =>
        todo.id === payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo,
      );

    default:
      return state;
  }
}

const Todo = () => {
  const [text, setText] = useState("");
  const [todos, dispatch] = useReducer(reducer, todoList);


  function handleSubmit(e) {
    e.preventDefault();

    if (!text.trim()) {
      alert("enter todo");
      return;
    }

    const todo = {
      id: Math.random(),
      description: text,
      isCompleted: false,
    };

    dispatch({ type: "createTodo", payload: todo });

    setText("");
  }

  function deleteTodo(id) {
    dispatch({
      type: "deleteTodo",
      payload: id,
    });
  }
  function toggleTodo(id) {
    dispatch({
      type: "toggleTodo",
      payload: id,
    });
  }

  console.log(todos)

  

  

  return (
    <div>
      <h1>Todo list</h1>

      <ul>
        {todos?.map((todo, i) => (
          <li key={i}>
            {todo.description}
            <input type="checkbox" checked={todo.isCompleted} onChange={()=> toggleTodo(todo.id)} />
            <button onClick={()=>deleteTodo(todo.id)}>delete</button>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="enter todo"
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Todo;
