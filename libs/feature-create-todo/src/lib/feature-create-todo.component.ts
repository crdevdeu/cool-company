import { Component, OnInit } from '@angular/core';
import { TodosFacade } from '@cool-company/shared-todos-state';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'cool-company-feature-create-todo',
  templateUrl: './feature-create-todo.component.html',
  styleUrls: ['./feature-create-todo.component.css'],
})
export class FeatureCreateTodoComponent implements OnInit {
  constructor(
    private todosFacade: TodosFacade,
    private toastrService: NbToastrService
  ) {}

  ngOnInit(): void {}

  onSaveTodo(todo: any) {
    this.todosFacade.createTodo(todo);
    this.showToast('top-right', 'primary');
  }

  showToast(position: any, status: any) {
    this.toastrService.show('Todo created', `Success`, {
      position,
      status,
      icon: '',
    });
  }
}
