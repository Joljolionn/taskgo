import { useState } from "react";

import { BtnDelete } from "./BtnDelete";
import { TaskCheckbox } from "./TaskCheckbox";

import "./Task.css";

export function Task(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [draftTitle, setDraftTitle] = useState(props.title);

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            props.taskEdit(draftTitle);
            setIsEditing(false);
        }
    }

    return (
        <div className="taskRow">
            <TaskCheckbox
                completed={props.completed}
                toggleCompleted={props.toggleCompleted}
                id={props.id}
            />

            {isEditing ? (
                <input
                    className="taskTitle"
                    type="text"
                    value={draftTitle}
                    autoFocus
                    onChange={(e) => setDraftTitle(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onBlur={() => setIsEditing(false)}
                />
            ) : (
                <p className="taskTitle" onClick={() => setIsEditing(true)}>
                    {props.title}
                </p>
            )}

            <BtnDelete deleteTask={props.deleteTask} />
        </div>
    );
}
