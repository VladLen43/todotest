import { makeAutoObservable } from "mobx"
import { todoType, todosList } from "../types"

class Todo {

    todos = [
        {id: '1', title: 'some title', completed: false},
        {id: '2', title: 'some title2', completed: false},
        {id: '3', title: 'some title3', completed: false}
    ]

    constructor() {
        makeAutoObservable(this)
    }
    addTodo(todo: todoType) {
        this.todos.push(todo)
    }
    removeTodo(id: string) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }
    completeTodo(id: string) {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed : !todo.completed} : todo)
    }
    changeTodo(id: string, title: string) {
        if(title.length > 0) {
            this.todos = this.todos.map(todo => todo.id === id ? {...todo, title : title} : todo)
        } else {
            this.todos = this.todos.map(todo => todo.id === id ? {...todo, title : todo.title} : todo)
        }
    }
}
export default new Todo()