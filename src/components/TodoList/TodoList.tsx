import './TodoList.scss';
import { TodoListItem } from "./TodoListItem/TodoListItem";

export const TodoList = () => {
  return (
    <>
      <div className="todo-container">
          <ul className="todo-list failed">
              <TodoListItem name="Первая задача"/>
          </ul>
          <ul className="todo-list completed">
              <TodoListItem name="Вторая задача"/>
          </ul>
      </div>
    </>
  );
};
