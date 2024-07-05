import { useEffect, useState } from "react"
import api from "../services/api"
import { useAuth } from "../contexts/auth"
import ITask from "../types/task"
import TaskItem from "../components/TaskItem"

export default function Tasks(){
    const { user } = useAuth()
    const [tasks, setTasks] = useState<Array<ITask>>([])

    async function getTasks(){
        try{
            const response = await api.get("/tasks")
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
            <ul>
                {tasks.length > 0 && tasks.map(t => {
                    return <TaskItem task={t}/>
                })
            }
            </ul>
        </div>
    )
}