import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodosFacade } from '@cool-company/shared-todos-state';

@Component({
  selector: 'cool-company-feature-todos-list',
  templateUrl: './feature-todos-list.component.html',
  styleUrls: ['./feature-todos-list.component.css'],
})
export class FeatureTodosListComponent implements OnInit {
  mockTodos = [
    {
      name: 'have fun',
      description: 'having fun',
      id: '1234',
      task: {
        id: 'taskid',
        name: 'task name',
        description: 'this is the description of a task',
      },
    },
    {
      name: 'do this thing',
      id: '3256',
      description: 'something i have to do',
      task: {
        id: 'taskid',
        name: 'task name',
        description: 'this is the description of a task',
      },
    },
  ];

  constructor(private router: Router, private todosFacade: TodosFacade) {}

  ngOnInit(): void {
    this.todosFacade.init();
    this.todosFacade.allTodos$.subscribe((data: any) => {
      console.log(data);
    });
  }

  onTodoEdit(todo: any) {
    this.router.navigateByUrl(`detail/${todo.id}`);
  }

  onTodoRemove($event: any) {
    console.log($event);
  }
}
