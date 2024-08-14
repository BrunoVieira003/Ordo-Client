import { useEffect, useState } from "react"
import api from "../services/api"
import { useAuth } from "../contexts/auth"
import ITask from "../types/task"
import TaskItem from "../components/TaskItem"
import { Button } from "../components/Button"
import TaskForm from "../components/TaskForm"

export default function Tasks(){
    const [tasks, setTasks] = useState<Array<ITask>>([])
    const { user } = useAuth()
    const { id } = user

    async function getTasks(){
        try{
            const response = await api.get("/tasks", {params: { authorId: id } })
            setTasks(response.data.data)
        }catch(error){
            console.log('Something went wrong while fething tasks')
        }
    }

    useEffect(() => {
        getTasks()
    }, [])

    return (
        <div>
            <h1>Tasks</h1>
            <Button>New task</Button>
            <TaskForm/>
            <ul>
                {tasks.length > 0 && tasks.map(t => {
                    return <TaskItem task={t}/>
                })
            }
            </ul>
        </div>
    )
}