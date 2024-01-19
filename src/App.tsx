import React, { useState } from "react";
import "./App.css";
import InputField from "./component/InputField";
import { Todo } from "./model";
import TodoList from "./component/TodoList";
import Formik from "./component/Formik/Formik";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

// React.ReactNode;
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = todos;
    let complete = completedTodos;
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      // removing the from that position(source index) , 1(no of removing elements )
      // so basically removing the souce index position element
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "TodosList") {
      // ------------------------------------------

      // active.splice(destination.index, 0, add);

      // destination.index: It seems that destination is an object or variable with a property or key named index. This property likely holds a numerical index indicating the position in the array where the modification will take place.
      // 0: The second parameter of splice is the number of elements to be removed from the array. In this case, it is 0, which means no elements will be removed.
      // add: This is a variable or value that will be inserted into the array at the specified index.
      // basically inserting the value of add in the position (destination.index)

      // ------------------------------------------

      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="App">
          <span className="heading">Todo App</span>
          <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setCompletedTodos={setCompletedTodos}
            completedTodos={completedTodos}
          />
          {/* <Formik /> */}
        </div>
      </DragDropContext>
    </>
  );
};

export default App;
