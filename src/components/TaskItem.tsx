import styled from "styled-components"
import ITask from "../types/task"
import { formatDate } from "../util/formatters"

const Item = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    align-items: start;
    background-color: #161616;
    padding: 20px;
    border-radius: 5px;
    margin: 0 auto;

`
const Title = styled.h2`
    font-size: 2rem;
    margin-top: 8px;
    margin-bottom: 0;
`
const Status = styled.span<{status: string}>`
    font-size: 1rem;
    border-radius: 100px;
    padding: 3px 16px;
    background-color: ${(props: any) => 
        props.status === 'pending' ? '#dfbb1e'
        : props.status === 'inprogress' ? '#455d70'
        : props.status === 'completed' ? '#047235'
        : '#6b6b6b'
    };
`
const DueDate = styled.p`
    background-color: #242424;
    align-self: end;
    padding: 6px;
    border-radius: 3px;
`

type propsType = {
    task: ITask
}

export default function TaskItem(props: propsType){
    const { task } = props

    return (
        <Item>
            <Status status={task.status}>{task.status}</Status>
            <Title>{task.title}</Title>
            {task.dueDate && <DueDate>{formatDate(task.dueDate)}</DueDate>}

        </Item>
    )
}