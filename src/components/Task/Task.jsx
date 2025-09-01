import { useState } from "react";

import { BtnDelete } from "../BtnDelete/BtnDelete";
import { TaskCheckbox } from "../TaskCheckbox/TaskCheckbox";

import "./Task.css";

export function Task(props) {
	const [isEditing, setIsEditing] = useState(false);
	const [isDescription, setIsDescription] = useState(false);
	const [draftTitle, setDraftTitle] = useState(props.title);

	function handleKeyDown(e) {
		if (e.key === "Enter") {
			props.taskEdit(draftTitle);
			setIsEditing(false);
		}
	}

    function toggleDescription(){
        setIsDescription(description => !description)
    }

	return (
		<div className="taskRow">
            <div className="content">
                
            <p className="ampliar" onClick={toggleDescription}>^</p>
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

			<TaskCheckbox
				completed={props.completed}
				toggleCompleted={props.toggleCompleted}
				id={props.id}
			/>
			<BtnDelete deleteTask={props.deleteTask} />
        </div>
        <div className="description" style={{display: isDescription ? "block" : "none"}}>
        {props.description}
        </div>
		</div>
	);
}
