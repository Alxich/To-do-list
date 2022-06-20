import React from "react";
import TitleBar from "./TitleBar/TitleBar";
import Task from "./Task/Task";
import NewTask from "./NewTask/NewTask";
import style from "./Content.module.css";

function Content(props) {
    let tasks = props.TaskState.tasks
        .map( (task) => <Task taskText={task.taskName} taskDone={props.TaskState.taskDone} id={task.id} dispatch={props.dispatch} />);

    let lengthOfTask = tasks.length;
    let taskDone = props.TaskState.taskDone;

    return(
        <div className={style.container}>
            <div className={style.mainContent}>
                <TitleBar countTask={lengthOfTask} taskDone={taskDone}/>
                <div className={style.tasks}>
                    {tasks}
                </div>
                <NewTask newText={props.TaskState.newText} dispatch={props.dispatch} />
            </div>
        </div>
    )
}

export default Content;