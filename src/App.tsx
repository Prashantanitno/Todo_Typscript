import React, { useState } from "react";
import "./App.css";
import InputField from "./component/InputField";
import { Todo } from "./model";
import TodoList from "./component/TodoList";
import Formik from "./component/Formik/Formik";

// React.ReactNode;
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <>
      <div className="App">
        <span className="heading">Todo App</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
        <Formik />
      </div>
    </>
  );
};

export default App;
