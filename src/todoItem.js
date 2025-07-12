export default class TodoItem {
	title = "Task Title";
	description = "Description"
	dueDate = "Due/Date/Due"
	priority = "Priority"
	constructor(title, description, dueDate, priority) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
	}
}