import { createSignal, JSX, type Component } from 'solid-js';
import TaskCard from '../components/TaskCard';
import { Task, TaskStatus } from '../types/task';
import TaskList from '../components/TaskList';
import logo from "../assets/logo.gif";


const App: Component = () => {

  const [tasks, setTasks] = createSignal<Task[]>([
    {
      content: 'asdnaksjd',
      status: TaskStatus.Done,
      archived: false,
    }
  ])

  const onDeleteTask = (index: number, event: Event) => {
    setTasks((tasks: Task[]) => tasks.filter((e,i) => i != index));
  }

  const onNewTask = (content: string) => {
    setTasks((tasks: Task[]) => [...tasks, {
      content,
      archived: false,
      status: TaskStatus.ToDo,
    }])
  }

  
  return (
    <div class="flex flex-col items-center">
      <img class='h-40 w-120'  src={logo} alt="Cool logo" />
      <div class='w-300'>
        <TaskList onNewTask={onNewTask} onDeleteTask={onDeleteTask} tasks={tasks()}></TaskList>
      </div>
    </div>
  );
};

export default App;
