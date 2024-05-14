import { useState, useEffect } from "react";
import TodoStore from "../../store/todo";
import styles from "./Todo.module.scss";
import { AcceptSvg } from "./AcceptSvg";
import { TrashCanSvg } from "./TrashCanSvg";
import { todoType } from "../../types";

interface ITodo{
  td: todoType
}

export const Todo = ({td}: ITodo): JSX.Element => {

  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  const changeTodoTitle = () => {
    if(newTitle.length > 0){
      TodoStore.editTodo(td.id, 'title', newTitle) 
      setNewTitle('')
      setIsEditing(false)
    }
 
  };

  const handleSetEdit = () => {
    if(isEditing) return
    setIsEditing(true)
    setNewTitle(td.title)
  }

  const changeTodoStatus = (id: string) => {
    TodoStore.editTodo(id, 'isDone', !td.isDone)
  }

  const onKeyDown = (e: KeyboardEvent) => {

    if (e.key === 'Escape' ) {
      setIsEditing(false);
      setNewTitle('')
    }
    if(e.key === 'Enter' && isEditing){
      changeTodoTitle()
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown, true);

    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
    };
  }, []);

  return (
    <div className={styles.todo_container} key={td.id}>
      <div onDoubleClick={handleSetEdit}>
        {isEditing ? (
          <div  className={styles.edit_todo}>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <button onClick={changeTodoTitle}>ok</button>
          </div>
        ) : (
            <span style={td.isDone ? {color: '#78CFB0'} : {color: '#9E78CF'}}>{td.title}</span>
          
        )}
      </div>
    <div className={styles.buttons}>
      <div
        className={styles.todo_complete}
        onClick={() => changeTodoStatus(td.id)}    
      >
           <AcceptSvg />  
        
      </div>
      
      <div
        className={styles.delete_button}
        onClick={() => TodoStore.removeTodo(td.id)}
      >
       <TrashCanSvg />
      </div>
    </div>
</div>
  );
};
