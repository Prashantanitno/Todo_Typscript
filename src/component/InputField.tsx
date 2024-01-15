import React, { useRef } from "react";
import "./style.css";

interface InputFieldProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

// const InputField = ({ todo, setTodo }: InputFieldProps) => {
const InputField: React.FC<InputFieldProps> = ({
  todo,
  setTodo,
  handleAdd,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <form
        className="input"
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <input
          ref={inputRef}
          type="input"
          placeholder="Enter your task"
          className="input__box"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button className="input_submit" type="submit">
          Go
        </button>
      </form>
    </div>
  );
};

export default InputField;
