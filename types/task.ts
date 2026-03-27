export enum TaskStatus {
    ToDo = "todo",
    InProgress = "in_progress",
    Done = "done",
}

export interface Task{
    content: string
    archived: boolean
    status: TaskStatus
}