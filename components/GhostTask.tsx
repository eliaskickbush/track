import { Component, createSignal } from "solid-js";
import { Task } from "../types/task";
import { FaRegularPenToSquare } from "solid-icons/fa";

const GhostTaskCard: Component<{
    onNewTask: (content: string) => void,
}> = (props) => {

    const [content,setContent] = createSignal<string>("");

    const inputHandler = (event: InputEvent & {target: HTMLInputElement}) => {
        setContent(event.target.value)
    }

    const enterHandler = (event: KeyboardEvent) => {
        if(event.key == 'Enter'){
            props.onNewTask(content());
            setContent("");
        }
    }

    return <div class="border m-5 p-5 text-3xl flex items-center">
        <input onInput={inputHandler} onKeyDown={enterHandler} class="w-full h-20 focus:outline-none" type="text" value={content()} placeholder="I have to ..."></input>
        <FaRegularPenToSquare class="hover:cursor-pointer" onClick={() => {
            console.log('clicked')
        }}></FaRegularPenToSquare>
    </div>
}

export default GhostTaskCard;