import React, { useReducer } from "react";

import TodoContext from "./todo-context";

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const DELETE_TODO = 'DELETE_TODO';

const reducer = (state, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				todos: [...state.todos, action.payload]
			};
		case TOGGLE_TODO:
			return {
				...state,
				todos: state.todos.map(todo => todo.id === action.payload
					? { ...todo, complete: !todo.complete }
					: todo
				)
			};
		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload)
			};
		default:
			return state;
	}
}

const TodoState = (props) => {
	const initialState = {
		todos: []
	}

	const [state, dispatch] = useReducer(reducer, initialState);

	const addTodo = (todo) => {
		dispatch({
			type: ADD_TODO,
			payload: todo
		})
	}

	const toggleTodo = (todoID) => {
		dispatch({
			type: TOGGLE_TODO,
			payload: todoID
		})
	}

	const deleteTodo = (todoID) => {
		dispatch({
			type: DELETE_TODO,
			payload: todoID
		})
	}

	return (
		<TodoContext.Provider value={{ todos: state.todos, addTodo, toggleTodo, deleteTodo }}>
			{props.children}
		</TodoContext.Provider>
	)
}

export default TodoState;