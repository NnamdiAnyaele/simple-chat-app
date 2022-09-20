import { Provider } from "react-redux";
import { store } from "./store/index";

import "./App.css";

function App() {
	return (
		<Provider store={store}>
			<div className="App">Learn React</div>
		</Provider>
	);
}

export default App;
