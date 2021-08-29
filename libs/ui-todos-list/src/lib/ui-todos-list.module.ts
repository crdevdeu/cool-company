import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTodoListComponent } from './ui-todo-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiTodoListComponent],
  exports: [UiTodoListComponent],
})
export class UiTodosListModule {}
