import { use } from "react";

interface Todos {
  title: string;
}

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return res.json();
};

const UseHook = () => {
  const data: Todos = use(fetchData());

  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
};

export default UseHook;
