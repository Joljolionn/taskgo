import "./RightSection.css";

export default function RightSection(props) {
	return (
		<div className="rightsection">
			<h1>Bem vindo!</h1>

			<form onSubmit={props.handleSubmit}>
				<label htmlFor="tituloTask">
					Título
					<input type="text" name="tituloTask" id="tituloTask" />
				</label>

				<label htmlFor="descricaoTask">
					Descrição
					<textarea
						rows={10}
						name="descricaoTask"
						id="descricaoTask"
					/>
				</label>
				<button>Adicionar Tarefa</button>
			</form>

			<div className="registrar">
				<button>Login</button>

				<button>Cadastre-se</button>
			</div>
		</div>
	);
}
