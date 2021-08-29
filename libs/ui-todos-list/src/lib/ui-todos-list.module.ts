import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTodoListComponent } from './ui-todo-list.component';
import {
  NbListModule,
  NbCardModule,
  NbIconModule,
  NbButtonModule,
  NbFormFieldModule,
  NbInputModule,
} from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NbListModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    NbFormFieldModule,
    NbInputModule,
    ReactiveFormsModule,
  ],
  declarations: [UiTodoListComponent],
  exports: [UiTodoListComponent],
})
export class UiTodosListModule {}
