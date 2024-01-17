import React from "react";

const Todos = ({ todos }: { todos: any[] }) => {
  return <pre>{JSON.stringify(todos, null, 2)}</pre>;
};

export default Todos;
