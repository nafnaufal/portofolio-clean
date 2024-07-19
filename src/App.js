import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Project from "./pages/Project";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Project />} />
				<Route path="about" element={<About />} />
				{/* <Route path="*" element={<NoPage />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
