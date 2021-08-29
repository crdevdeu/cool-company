import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTodoListComponent } from './ui-todo-list.component';
import {
  NbListModule,
  NbCardModule,
  NbIconModule,
  NbButtonModule,
} from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    NbListModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
  ],
  declarations: [UiTodoListComponent],
  exports: [UiTodoListComponent],
})
export class UiTodosListModule {}
