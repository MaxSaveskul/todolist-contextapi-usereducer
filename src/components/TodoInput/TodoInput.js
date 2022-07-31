import React, { useState, useContext } from "react";
import styles from "./TodoInput.module.css";

import TodoContext from "../../context/todo-context";

const TodoInput = () => {
	const [todo, setTodo] = useState("");
	const { addTodo } = useContext(TodoContext);

	const onChangeHandler = (e) => {
		setTodo(e.target.value);
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();

		const newTodo = {
			id: Math.random(),
			text: todo,
			complete: false
		}

		if (todo != '') {
			addTodo(newTodo);
			setTodo("");
		} else return;
	};

	return (
		<div className={styles.todoInput}>
			<h3 className={styles.todoInput__title}>
				useContext + useReducer To-Do List
			</h3>
			<form onSubmit={onSubmitHandler} className={styles.todoInput__form}>
				<input
					className={styles.todoInput__input}
					type="text"
					value={todo}
					placeholder="Enter text"
					onChange={onChangeHandler}
				/>
				<button className={styles.todoInput__submitBtn}>ADD</button>
			</form>
		</div>
	);
};

export default TodoInput;