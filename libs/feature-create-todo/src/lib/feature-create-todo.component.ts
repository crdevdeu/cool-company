import { Component, OnInit } from '@angular/core';
import { TodosFacade } from '@cool-company/shared-todos-state';

@Component({
  selector: 'cool-company-feature-create-todo',
  templateUrl: './feature-create-todo.component.html',
  styleUrls: ['./feature-create-todo.component.css'],
})
export class FeatureCreateTodoComponent implements OnInit {
  constructor(private todosFacade: TodosFacade) {}

  ngOnInit(): void {}

  onSaveTodo(todo: any) {
    this.todosFacade.createTodo(todo);
  }
}
