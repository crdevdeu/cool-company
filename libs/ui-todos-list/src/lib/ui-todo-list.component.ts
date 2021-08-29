import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'cool-company-ui-todo-list',
  templateUrl: './ui-todo-list.component.html',
  styleUrls: ['./ui-todo-list.component.css'],
})
export class UiTodoListComponent implements OnInit {
  todoToEdit: any = null;
  todosFormArray = new FormArray([]);
  @Input() todos: any[] = [];
  @Output() saveTodo = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {
    this.setFormArrayFromTodos();
  }

  setFormArrayFromTodos() {
    this.todos.forEach((todo) => {
      const control = new FormControl(todo);
      this.todosFormArray.push(control);
    });
  }

  setTodoToEdit(id: string) {
    this.todoToEdit = id;
  }

  saveTodoEdit(todo: any) {
    this.todoToEdit = null;
    this.saveTodo.emit(todo);
  }
}
