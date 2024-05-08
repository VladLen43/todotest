import { makeAutoObservable } from "mobx"
import { todoType } from "../types"

class Todo {

    todos = JSON.parse(localStorage.getItem('todos')||'[]')

    completedTodos = JSON.parse(localStorage.getItem('compTodos')||'[]') 

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todoshka: todoType) {
       if(this.todos.find((todo: todoType) => todo.title === todoshka.title)){
           alert('todo already added')
       } else {
            this.todos.push(todoshka);
            localStorage.setItem("todos", JSON.stringify(this.todos));
       }
    }

    removeTodo(id: string) {
        this.todos = this.todos.filter((todo : todoType) => todo.id !== id)
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    completeTodo(id: string) {
        this.todos = this.todos.map((todo : todoType) => todo.id === id ? {...todo, completed : !todo.completed} : todo)
        localStorage.setItem("todos", JSON.stringify(this.todos));
    }
    
    changeTodo(id: string, title: string) {
        if(title.length > 0 ) {
            this.todos = this.todos.map((todo: todoType) => todo.id === id ? {...todo, title : title} : todo)
        } else {
            this.todos = this.todos.map((todo : todoType) => todo.id === id ? {...todo, title : todo.title} : todo)
        }
    }
}
export default new Todo()