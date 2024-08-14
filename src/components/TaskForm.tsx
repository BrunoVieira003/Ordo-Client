import { FormEvent, useState } from "react";
import { SubmitButton } from "./Button";
import Form from "./Form";
import { DateTime } from "luxon";
import api from "../services/api";
import { useAuth } from "../contexts/auth";

const {TextInput, DateInput, Label} = Form

export default function TaskForm(){
    const [title, setTitle] = useState("")
    const [dueDate, setDueDate] = useState<Date>()
    const { user } = useAuth()
    const { id } = user

    async function handleSubmit(e: FormEvent){
        e.preventDefault()

        try{
            await api.post("/tasks", {
                title, 
                dueDate, 
                authorId: id
            })
        }catch(error){
            console.log('Something went wrong with login')
        }
    }

    return (
        <Form.Container onSubmit={handleSubmit}>
            <Label>Title</Label>
            <TextInput
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            />

            <Label>Due date</Label>
            <DateInput
            onChange={(e) => setDueDate(DateTime.fromISO(e.target.value).toJSDate())}
            />

            <SubmitButton value="Create"/>
        </Form.Container>
    )
}