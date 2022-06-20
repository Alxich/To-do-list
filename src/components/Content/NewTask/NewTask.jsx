import React from "react";
import style from "./NewTask.module.css";
import {addTaskCreator, updateTaskTextCreator} from "../../../Redux/taskReducer";

function NewTask(props) {
    let newTaskElement = React.createRef();

    let addTask = (e) => {
        e.preventDefault();

        let text = newTaskElement.current.value;
        if(text) {
            props.dispatch(addTaskCreator());
        }

        newTaskElement.current.value = '';
    }

    let changeTaskValue = () => {
        let text = newTaskElement.current.value;
        props.dispatch(updateTaskTextCreator(text));
    }

    return(
        <div className={style.addTask}>
            <div className={style.formWrite}>
                <input type="text" onChange={changeTaskValue} ref={newTaskElement} value={props.newText} />
            </div>
            <div className={style.btnSubm} onClick={addTask}>
                <p>Добавити</p>
            </div>
        </div>
    )
}

export default NewTask;