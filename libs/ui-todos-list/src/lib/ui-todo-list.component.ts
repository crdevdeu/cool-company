import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cool-company-ui-todo-list',
  templateUrl: './ui-todo-list.component.html',
  styleUrls: ['./ui-todo-list.component.css'],
})
export class UiTodoListComponent implements OnInit {
  todoToEdit: any = null;
  @Input() todos: any[] = [];
  constructor() {}

  ngOnInit(): void {}

  setTodoToEdit(id: string) {
    this.todoToEdit = id;
  }

  saveTodoEdit(id: string) {
    this.todoToEdit = null;
  }
}
