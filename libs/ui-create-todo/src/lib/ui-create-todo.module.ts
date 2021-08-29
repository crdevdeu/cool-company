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

@NgModule({
  imports: [
    CommonModule,
    NbFormFieldModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
  ],
  declarations: [UiCreateTodoComponent],
  exports: [UiCreateTodoComponent],
})
export class UiCreateTodoModule {}
