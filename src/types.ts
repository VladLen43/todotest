export type todosList = {
    todos: todoType[]
}

export type todoType = {
    id: string;
    title: string;
    isDone: boolean;
    userId: string;
}

export type UserType = { 
    id: string;
    username: string;
    password: string;
}

export type UserList = {
    users: UserType[];
}