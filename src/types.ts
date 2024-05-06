export type todosList = {
    todos: todoType[]
}

export type todoType = {
    id: string;
    title: string;
    completed: boolean;
}