import "./TaskList.css";
import { Task } from "../Task/Task";

export function TaskList(props) {
		return (
		<div className="taskList">
			{props.taskList.length === 0 && "Lista de tarefas vazia!"}
			{props.taskList.map((task) => {
				return (
					<Task
						key={task.id}
						id={task.id}
						title={task.title}
						completed={task.completed}
						toggleCompleted={() => props.toggleCompleted(task.id)}
						deleteTask={() => props.deleteTask(task.id)}
						taskEdit={(newTitle) => props.taskEdit(task.id, newTitle)}
					/>
				);
			})}
        </div>
	)
}
