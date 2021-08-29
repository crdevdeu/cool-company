import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureCreateTodoComponent } from './feature-create-todo.component';
import { UiCreateTodoModule } from '@cool-company/ui-create-todo';

@NgModule({
  imports: [CommonModule, UiCreateTodoModule],
  declarations: [FeatureCreateTodoComponent],
  exports: [FeatureCreateTodoComponent],
})
export class FeatureCreateTodoModule {}
