import "./HomePage.css";
import RightSection from "../../components/RightSection/RightSection";
import { TaskList } from "../../components/TaskList/TaskList";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";

export default function HomePage() {
	const [taskList, setTaskList] = useState(
		JSON.parse(localStorage.getItem("tasklist") || "[]"),
	);

	useEffect(() => {
		localStorage.setItem("tasklist", JSON.stringify(taskList));
	}, [taskList]);

	function handleSubmit(e) {
		e.preventDefault();
        if(e.target.elements[0].value == ""){
            alert("Adicione um título para a tarefa")
            return
        }
		setTaskList([
			...taskList,
			{
				title: e.target.elements[0].value,
                description: e.target.elements[1].value,
				completed: false,
				id: crypto.randomUUID(),
			},
		]);
		e.target.elements[0].value = "";
		e.target.elements[1].value = "";
	}
	function toggleCompleted(id) {
		setTaskList((currentTaskList) =>
			currentTaskList.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task,
			),
		);
	}

	function taskEdit(id, newTitle) {
		setTaskList((currentTaskList) =>
			currentTaskList.map((task) =>
				task.id === id ? { ...task, title: newTitle } : task,
			),
		);
	}

	function deleteTask(id) {
		setTaskList((currentTaskList) =>
			currentTaskList.filter((task) => task.id !== id),
		);
	}
	return (
		<main>
			<Header />
			<div className="content">
				<TaskList
					toggleCompleted={toggleCompleted}
					deleteTask={deleteTask}
					taskEdit={taskEdit}
					taskList={taskList}
				/>
				<RightSection handleSubmit={handleSubmit} />
			</div>
		</main>
	);
}
