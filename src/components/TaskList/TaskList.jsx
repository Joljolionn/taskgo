import "./TaskList.css";
import { Task } from "../Task/Task";

export function TaskList(props) {
        const taskList = props.searchRegex ? props.taskList.filter((task) => props.searchRegex.test(task.title)) : props.taskList
		return (
		<div className="taskList">
			{props.taskList.length === 0 && "Lista de tarefas vazia!"}
			{taskList.map((task) => {
				return (
					<Task
						key={task.id}
						id={task.id}
						title={task.title}
						completed={task.completed}
                        description={task.description}
						toggleCompleted={() => props.toggleCompleted(task.id)}
						deleteTask={() => props.deleteTask(task.id)}
						taskEdit={(newTitle) => props.taskEdit(task.id, newTitle)}
					/>
				);
			})}
        </div>
	)
}
