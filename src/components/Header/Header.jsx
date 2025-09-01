import "./Header.css";

export default function Header(props) {
	return (
		<div className="header">
			<div className="search">
				search
				<input className="searchbar"/>
			</div>
			<div className="tarefasConcluidas">{props.completedTasks}/{props.qtdTasks} concluídas</div>
		</div>
	);
}
