export type todosList = {
    todos: todoType[]
}

export type todoType = {
    id: string;
    title: string;
    completed: boolean;
}

export type UserType = { 
    "id": string;
    "username": string;
    "password": string;
    "access": boolean;
}

export type UserList = {
    users: UserType[];
}