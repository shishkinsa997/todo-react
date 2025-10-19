import './TodoListItem.scss';

export const TodoListItem = ({name}: {name: string}) => {
  return (
        <li className="todo-list-item__wrapper">
            <span>{name}</span>
            <div className="todo-list-item__buttons">
                <button className="btn-trash"></button>
                <button className="btn-check"></button>
            </div>
        </li>
  );
};