import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodosFacade } from '@cool-company/shared-todos-state';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'cool-company-feature-todos-list',
  templateUrl: './feature-todos-list.component.html',
  styleUrls: ['./feature-todos-list.component.css'],
})
export class FeatureTodosListComponent implements OnInit {
  todos: any;
  updateInProgress = false;
  constructor(
    private router: Router,
    private todosFacade: TodosFacade,
    private toastrService: NbToastrService
  ) {}

  ngOnInit(): void {
    this.todosFacade.allTodos$.subscribe((todos: any) => {
      this.todos = todos;

      if (this.updateInProgress) {
        this.updateInProgress = false;
        this.showToast('top-right', 'primary');
      }
    });
    this.todosFacade.init();
  }

  onTodoEdit(todo: any) {
    this.router.navigateByUrl(`detail/${todo.id}`);
  }

  showToast(position: any, status: any) {
    this.toastrService.show('Todo deleted', `Success`, {
      position,
      status,
      icon: '',
    });
  }

  onTodoRemove(todo: any) {
    this.updateInProgress = true;
    this.todosFacade.deleteTodo(todo.id);
  }
}
