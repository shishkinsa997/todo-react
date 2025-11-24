import { useState } from "react";
import { Form } from "../components/Form/Form";
import { TodoList } from "../components/TodoList/TodoList";
import { Todo } from "../models/todo-item";

export const TodoListPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const createNewTodo = (text: string) => {
    const newTodo: Todo = {
      id: todos.length,
      text: text,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
  };
  const updateTodo = (todoItem: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoItem.id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const deleteTodo = (todoItem: Todo) => {
    const newTodos = todos.filter((todo) => todo.id !== todoItem.id);
    setTodos(newTodos);
  };

  return (
    <>
      <Form createNewTodo={createNewTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </>
  );
};
