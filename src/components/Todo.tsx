import { useState } from "react";

interface Todos {
  id: number;
  task: string;
  completed: boolean;
}

const Todo = () => {
  const [todo, setTodo] = useState<Todos[]>([]);

  const addTodo = (task: string) => {
    const newTodo: Todos = {
      id: todo.length + 1,
      task,
      completed: false,
    };

    setTodo((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div>
      <button onClick={() => addTodo("New Todo")}>Add</button>

      <ul>
        {todo.map((todo) => (
          <li key={todo.id}>
            {todo.task} {todo.completed ? "(Completed)" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
