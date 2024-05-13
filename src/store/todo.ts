import { makeAutoObservable } from "mobx"
import { todoType } from "../types"

class Todo {

    todos = JSON.parse(localStorage.getItem('todos')||'[]')

    completedTodos = JSON.parse(localStorage.getItem('compTodos')||'[]') 

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(newTodo: todoType) {
       if(this.todos.find((todo: todoType) => todo.title === todo.title)){
           alert('todo already added')
       } else {
            this.todos.push(newTodo);
            localStorage.setItem("todos", JSON.stringify(this.todos));
       }
    }

    removeTodo(id: string) {
        this.todos = this.todos.filter((todo : todoType) => todo.id !== id)
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
    
    editTodo(id: string, key: string, value: string | boolean) {

        this.todos = this.todos.map((todo : todoType) => todo.id === id ? {...todo, [key] : value} : todo)

    }
}
export default new Todo()