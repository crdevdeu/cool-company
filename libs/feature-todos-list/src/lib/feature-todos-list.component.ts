import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodosFacade } from '@cool-company/shared-todos-state';

@Component({
  selector: 'cool-company-feature-todos-list',
  templateUrl: './feature-todos-list.component.html',
  styleUrls: ['./feature-todos-list.component.css'],
})
export class FeatureTodosListComponent implements OnInit {
  todos: any;
  constructor(private router: Router, private todosFacade: TodosFacade) {}

  ngOnInit(): void {
    this.todosFacade.allTodos$.subscribe((todos: any) => {
      this.todos = todos;
    });
    this.todosFacade.init();
  }

  onTodoEdit(todo: any) {
    this.router.navigateByUrl(`detail/${todo.id}`);
  }

  onTodoRemove($event: any) {
    console.log($event);
  }
}
