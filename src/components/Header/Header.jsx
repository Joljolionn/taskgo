import "./Header.css";

export default function Header(props) {
	return (
		<div className="header">
			<div className="search">
				search
				<input
					className="searchbar"
					onChange={(e) => props.handleRegex(e.target.value)}
				/>{" "}
				{/* Terminar mecanismo de pesquisa*/}
			</div>
			<div className="tarefasConcluidas">
				{props.completedTasks}/{props.qtdTasks} concluídas
			</div>
		</div>
	);
}
