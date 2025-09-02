import "./HomePage.css";
import RightSection from "../../components/RightSection/RightSection";
import { TaskList } from "../../components/TaskList/TaskList";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";

export default function HomePage() {
	const [taskList, setTaskList] = useState(
		JSON.parse(localStorage.getItem("tasklist") || "[]"),
	);

	const [searchRegex, setSearchRegex] = useState("");

	useEffect(() => {
		localStorage.setItem("tasklist", JSON.stringify(taskList));
	}, [taskList]);

	function handleSubmit(e) {
		e.preventDefault();
		if (e.target.elements[0].value == "") {
			alert("Adicione um título para a tarefa");
			return;
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

	const handleRegex = (value) => {
        
		try {
			// cria regex case-insensitive
			const regex = new RegExp(value, "i");
			setSearchRegex(regex);
		} catch (err) {
			// se a regex for inválida (ex: usuário digitou só "[")
			setSearchRegex(null);
		}
	};

	return (
		<main>
			<Header
				qtdTasks={taskList.length}
				completedTasks={
					taskList.filter((task) => task.completed).length
				}
				handleRegex={handleRegex}
			/>
			<div className="content">
				<TaskList
					toggleCompleted={toggleCompleted}
					deleteTask={deleteTask}
					taskEdit={taskEdit}
					taskList={taskList}
                    searchRegex={searchRegex}
				/>
				<RightSection handleSubmit={handleSubmit} />
			</div>
		</main>
	);
}
