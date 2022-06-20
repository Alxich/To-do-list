import React from "react";
import style from "./TitleBar.module.css"

function TitleBar(props) {
    return(
        <div className={style.titleBar}>
            <h1>
                Всього тасків:
                <span className={style.taskCount}>
                    {props.countTask}
                </span>
            </h1>
            <p>
                Виконано:
                <span className={style.taskDone}>
                    {props.taskDone}
                </span>
            </p>
        </div>
    )
}

export default TitleBar;