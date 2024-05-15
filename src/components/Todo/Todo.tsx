import { useState, useEffect } from "react";
import TodoStore from "../../store/todo";
import styles from "./Todo.module.scss";
import { TrashIcon } from "../../assets/icons";
import { AcceptIcon } from "../../assets/icons";
import { todoType } from "../../types";
import { when } from 'mobx';

interface ITodo{
  td: todoType
}

export const Todo = ({td}: ITodo): JSX.Element => {

  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
  
    when(
      () => TodoStore.todoId !== td.id,
      () => {
        setIsEditing(false);
    }
  );

  },[TodoStore.todoId])

  const changeTodoTitle = () => {
    if(newTitle.length > 0){
      TodoStore.editTodo(td.id, 'title', newTitle) 
      setNewTitle('')
      setIsEditing(false)
    }
 
  };

  const handleSetEdit = () => {
    if(isEditing) return
    setNewTitle(td.title)
    setIsEditing(true)
    TodoStore.getTodoId(td.id)
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
           <AcceptIcon />  
        
      </div>
      
      <div
        className={styles.delete_button}
        onClick={() => TodoStore.removeTodo(td.id)}
      >
       <TrashIcon />
      </div>
    </div>
</div>
  );
};
