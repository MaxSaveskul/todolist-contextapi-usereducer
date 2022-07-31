import React from "react";
import "./App.css";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";

import TodoState from "./context/TodoState";

function App() {
	return (
		<div className="app">
			<TodoState>
				<TodoInput />
				<TodoList />
			</TodoState>
		</div>
	);
}

export default App;
