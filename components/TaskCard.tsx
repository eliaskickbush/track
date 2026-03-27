import { Component, JSX } from "solid-js";
import { Task, TaskStatus } from "../types/task";
import { FaSolidClose } from "solid-icons/fa";

const TaskCard: Component<{
    task: Task, 
    index: number, 
    onDeleteTask: (data: number, event: Event) => void,
}> = (props) => {

    return <div class="border m-5 p-5 text-3xl flex items-center shadow-lg">
        <input class="w-full h-20 focus:outline-none text-wrap" type="text" value={props.task.content}></input>
        <FaSolidClose onClick={[props.onDeleteTask, props.index]} class="hover:cursor-pointer"></FaSolidClose>
    </div>
}

export default TaskCard;