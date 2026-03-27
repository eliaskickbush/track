import { Component, Index } from "solid-js";
import { Task } from "../types/task";
import TaskCard from "./TaskCard";
import GhostTaskCard from "./GhostTask";


// Just render a scrollable list of tasks
const TaskList: Component<{
    tasks: Task[], 
    onDeleteTask: (data: number, event: Event) => void,
    onNewTask: (content: string) => void,
}> = (props) => {
    return <div>
        <Index each={props.tasks}>
            {(item,index) => (
                <TaskCard onDeleteTask={props.onDeleteTask} index={index} task={item()}></TaskCard>
            )}
        </Index>
        <GhostTaskCard onNewTask={props.onNewTask} ></GhostTaskCard>
    </div>
}

export default TaskList;