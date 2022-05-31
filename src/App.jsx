import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Trips from "./pages/trips/Trips";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
				</Route>
				<Route path="/trips">
					<Route index element={<Trips/>} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
