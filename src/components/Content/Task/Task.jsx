import React from "react";
import style from "./Task.module.css"
import {doneTaskCreator, removeTaskCreator} from "../../../Redux/taskReducer";

function Task(props) {
    const onDelete = () => {
        props.dispatch(removeTaskCreator(props.id));
    }
    const onCheck = () => {
        props.dispatch(doneTaskCreator(props.id));
    }

    return(
        <div className={style.task}>
            <div className={style.taskName}>
                <h4>{props.taskText}</h4>
            </div>
            <div className={style.checkTask + ' check'} onClick={onCheck}>
                <i className="fa-solid fa-thumbs-up"></i>
            </div>
            <div className={style.delTask + ' delete'} onClick={onDelete}>
                <i className="fa-solid fa-trash-can"></i>
            </div>
        </div>
    )
}

export default Task;