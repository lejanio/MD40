import {Injectable} from "@angular/core";
import {TodoItem} from "../models/user.model";
import {v4 as idGenerator} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todos: TodoItem[] = [
    {
      isCompleted: false,
      name: 'Go for a walk',
    },
    {
      isCompleted: false,
      name: 'Go to the gym',
    },
  ];

  getTodoList(): TodoItem[] {
    return this.todos;
  }

  addTodoItem(query: TodoItem): TodoItem[] {
    const newTodoItem = {
      ...query
    }
    this.todos.push(newTodoItem);
    return this.todos;
  }
}
