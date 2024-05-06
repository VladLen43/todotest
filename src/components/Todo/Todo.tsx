import React, { useState, useEffect } from "react";
import todo from "../../store/todo";
import styles from "./Todo.module.scss";

type TodoProps = {
  id: string;
  title: string;
  completed: boolean;
};

export const Todo: React.FC<TodoProps> = ({ id, title, completed }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [changedTitle, setChangedTitle] = useState("");

  const changeTodos = (id: string, title: string) => {
    todo.changeTodo(id, title);
    setIsEditing(!isEditing);
  };
  //@ts-ignore
  const back = (e) => {
    if (e.keyCode === 27) {
      setIsEditing(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", back, true);

    return () => {
      document.removeEventListener("keydown", back, false);
    };
  }, []);

  return (
    <div className={styles.todo_container} key={id}>
      <div onDoubleClick={() => setIsEditing(!isEditing)}>
        {isEditing ? (
          <div>
            <input
              type="text"
              value={changedTitle}
              onChange={(e) => setChangedTitle(e.target.value)}
            />
            <button onClick={() => changeTodos(id, changedTitle)}>ok</button>
          </div>
        ) : (
            <span>{title}</span>
          
        )}
      </div>
{/* сделать кнопку */}
      <input
        type="checkbox"
        onChange={() => todo.completeTodo(id)}
        checked={completed}
      />

      <button
        className={styles.delete_button}
        onClick={() => todo.removeTodo(id)}
      >
        <img style={{ width: "20px" }} src="/img/trash.svg"></img>
      </button>
    </div>
  );
};
