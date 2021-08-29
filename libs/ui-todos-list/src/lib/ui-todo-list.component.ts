import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'cool-company-ui-todo-list',
  templateUrl: './ui-todo-list.component.html',
  styleUrls: ['./ui-todo-list.component.css'],
})
export class UiTodoListComponent implements OnInit {
  todoToEdit: any = null;
  @Input() todos: any[] = [];
  @Output() editTodo = new EventEmitter<any>();
  @Output() removeTodo = new EventEmitter<any>();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  triggerTodoEdit(todo: any) {
    this.todoToEdit = todo.id;

    // this.todoToEdit = null;
    this.editTodo.emit(todo);
  }

  triggerTodoRemove(todo: any) {
    this.removeTodo.emit(todo);
  }
}
