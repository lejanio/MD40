import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoListService} from "../../shared/services/todo-list.service";
import {AddUserQuery, TodoItem} from "../../shared/models/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {


  @Output() addTodoEvent = new EventEmitter<TodoItem>();

  addTodoForm: FormGroup = new FormGroup({})

  buildForm(): void {
    this.addTodoForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    })
  }

  addOneTodoItem(): void {
    this.addTodoEvent.emit(this.addTodoForm.value)
    console.log(this.todos)
  }

  //=================================================//


  @Input()
  todos?: TodoItem[];

  inputValue: string = "";
  todoItems: string[] = [];
  isCompleted = false;

  constructor(private todosService: TodoListService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.todos = this.todosService.getTodoList();
    this.buildForm()
  }

  addTodoItem(query: TodoItem): void {
    this.todos = this.todosService.addTodoItem(query);
  }

  addItemHandler(value: string) {
    if (value.trim() === "" || this.todoItems.includes(value)) {
      return
    } else {
      this.todoItems = [...this.todoItems, value]
      this.inputValue = "";
    }
  }

  removeItemHandler(i: number) {
    this.todoItems = this.todoItems.filter((item, index) => index !== i)
  }

  toggleIsCompleted(i: number) {
    this.isCompleted = !this.isCompleted
  }
}
