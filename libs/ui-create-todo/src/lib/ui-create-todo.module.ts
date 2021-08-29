import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCreateTodoComponent } from './ui-create-todo.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiCreateTodoComponent],
  exports: [UiCreateTodoComponent],
})
export class UiCreateTodoModule {}
