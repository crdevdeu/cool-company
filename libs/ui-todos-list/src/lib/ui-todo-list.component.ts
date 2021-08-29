import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cool-company-ui-todo-list',
  templateUrl: './ui-todo-list.component.html',
  styleUrls: ['./ui-todo-list.component.css'],
})
export class UiTodoListComponent implements OnInit {
  @Input() todos: any[] = [];
  constructor() {}

  ngOnInit(): void {}
}
