interface ITask{
    id?: number,
    title: string,
    status: "pending" | "inprogress" | "completed" | "archived",
    dueDate?: Date,
    created_at: Date,
    updated_at: Date
}

export default ITask