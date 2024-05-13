export type todosList = {
    todos: todoType[]
}

export type todoType = {
    _id: string;
    title: string;
    completed: boolean;
    user: string;

}

export type UserType = { 
    fullName: string;
    password: string;
    email: string;
    avatarUrl: string;
    access: boolean;
}

export type UserList = {
    users: UserType[];
}