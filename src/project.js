import TodoItem from './todoItem.js'

export default class Project {
	todoItems = [];
	constructor(todoItems = []) {
		this.todoItems = todoItems
	}
}