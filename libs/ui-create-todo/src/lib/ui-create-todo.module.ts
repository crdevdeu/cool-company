import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCreateTodoComponent } from './ui-create-todo.component';
import {
  NbFormFieldModule,
  NbCardModule,
  NbIconModule,
  NbButtonModule,
  NbInputModule,
} from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NbFormFieldModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
    ReactiveFormsModule,
  ],
  declarations: [UiCreateTodoComponent],
  exports: [UiCreateTodoComponent],
})
export class UiCreateTodoModule {}
