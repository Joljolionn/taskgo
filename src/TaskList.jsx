import { useEffect, useRef, useState } from "react";
import "./TaskList.css";
import { Task } from "./components/Task";

export function TaskList() {
    const [taskList, setTaskList] = useState([]);
    const [isTaskFormVisible, setIsTaskFormVisible] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        if (isTaskFormVisible && formRef.current) {
            formRef.current.focus();
        }
    }, [isTaskFormVisible]);

    function toggleTaskForm() {
        setIsTaskFormVisible((isTaskFormVisibleNow) => !isTaskFormVisibleNow);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setTaskList([
            ...taskList,
            {
                title: e.target.elements[0].value,
                completed: false,
                id: crypto.randomUUID(),
            },
        ]);
        e.target.elements[0].value = "";
        setIsTaskFormVisible(false);
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
        <div className="taskList">
            {taskList.length === 0 && "Lista de tarefas vazia!"}
            {taskList.map((task) => {
                return (
                    <Task
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        completed={task.completed}
                        toggleCompleted={() => toggleCompleted(task.id)}
                        deleteTask={() => deleteTask(task.id)}
                        taskEdit={(newTitle) => taskEdit(task.id, newTitle)}
                    />
                );
            })}
            <form
                className="newTask"
                onSubmit={handleSubmit}
                style={{ display: isTaskFormVisible ? "flex" : "none" }}
            >
                <input className="newTaskInput" ref={formRef} />
                <button className="btnNewTaskConfirm">✔️</button>
            </form>
            <button className="btnAddTask" onClick={toggleTaskForm}>
                Adicionar Tarefa
            </button>
        </div>
    );
}
