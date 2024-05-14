import { makeAutoObservable } from "mobx"
import { todoType } from "../types"
import { toJS } from "mobx"


class Todo {

    todos : todoType[] = []

    todoId = ''

    constructor() {
        makeAutoObservable(this)
    }
    

    getTodos(todos: any) {
        this.todos = todos
    }

    addTodo(newTodo: todoType) {   
        this.todos = [...this.todos, newTodo]
        localStorage.setItem("todos", JSON.stringify(this.todos));
    }

    removeTodo(id: string) {
        this.todos = this.todos.filter((todo : todoType) => todo.id !== id)
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
    
    editTodo(id: string, key: string, value: string | boolean) {
        this.todos = toJS(this.todos.map((todo : todoType) => todo.id === id ? {...todo, [key] : value} : todo))
        localStorage.setItem('todos', JSON.stringify(this.todos))
    }
}
export default new Todo()