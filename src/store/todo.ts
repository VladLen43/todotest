import { makeAutoObservable } from "mobx"
import { todoType} from "../types"
import axios from '../axios'
import { configure } from "mobx"
import { toJS } from 'mobx'


configure({
    enforceActions: "never",
})

class Todo {


    todos : todoType[] = toJS([])


    constructor() {
        makeAutoObservable(this)
    }


    async getTodos(user : any) {

        const userID  = {
            userId: user
        }
        
        const { data } = await axios.post(`/todos/user`, userID)

        this.todos = data         
    
    }

    async addTodo(todo: any) {


        try {
            const acceptableTodo = {
                _id: Date.now().toString(),
                title: todo.title,
                completed: todo.completed,
                user: todo.userId
            }

            this.todos.push(acceptableTodo)

            await axios.post('/todos', todo)
    
        }
         catch(err) {
            alert(err)
         }
       
    }

    async removeTodo(id: string) {
        try {
            this.todos = this.todos.filter((todo) => todo._id !== id)

            await  axios.delete(`/todos/${id}`)

        } catch (err) {
            alert(err)
        }
       

    }
    
     async completeTodo(td : { _id: string, completed: boolean}) {
        try {
            this.todos = this.todos.map((todo: todoType) => todo._id === td._id ? {...todo, completed : td.completed} : todo)
            const { data } = await axios.patch(`/todos/${td._id}`, td)

        } catch (e) {
            alert(e)
        }
    }
    
    
    changeTodo(id: string, title: string) {
        if(title.length > 0 ) {
            this.todos = this.todos.map((todo: todoType) => todo._id === id ? {...todo, title : title} : todo)
        } else {
            this.todos = this.todos.map((todo : todoType) => todo._id === id ? {...todo, title : todo.title} : todo)
        }
    }
}
export default new Todo()