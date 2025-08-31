import "./HomePage.css"
import { TaskList } from "../../TaskList/TaskList";

function HomePage() {
	return (
		<main>
			{/* <Header /> //Aqui vai ser a parte de cima*/}
			<TaskList />
            {/* <RightSection /> // Aqui vai ser a parte direita*/}
		</main>
	);
}

export default HomePage;
