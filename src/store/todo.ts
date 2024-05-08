import { makeAutoObservable } from "mobx"
import { todoType, todosList } from "../types"

class Todo {

    todos = JSON.parse(localStorage.getItem('todos')||'[]')

    constructor() {
        makeAutoObservable(this)
    }
    addTodo(todoshka: todoType) {
       
            this.todos.push(todoshka);
            localStorage.setItem("todos", JSON.stringify(this.todos));
       
    }
    removeTodo(id: string) {
        this.todos = this.todos.filter((todo : todoType) => todo.id !== id)
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
    completeTodo(id: string) {
        this.todos = this.todos.map((todo : todoType) => todo.id === id ? {...todo, completed : !todo.completed} : todo)
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