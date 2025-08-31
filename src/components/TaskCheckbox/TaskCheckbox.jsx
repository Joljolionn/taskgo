import "./TaskCheckbox.css";

export function TaskCheckbox(props) {
    const checkboxId = `checkbox-${props.id}`;
    return (
        <div className="taskCompleted">
            <input id={checkboxId} className="taskCheckbox" type="checkbox" onChange={props.toggleCompleted} checked={props.completed}/>
            <label htmlFor={checkboxId} className="taskCheckmark">{props.completed ? "x" : ""}</label>
        </div>
    );
}
