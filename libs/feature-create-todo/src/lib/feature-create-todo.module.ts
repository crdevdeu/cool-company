import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureCreateTodoComponent } from './feature-create-todo.component';
import { UiCreateTodoModule } from '@cool-company/ui-create-todo';
import { NbToastrModule, NbToastrService } from '@nebular/theme';

@NgModule({
  imports: [CommonModule, UiCreateTodoModule, NbToastrModule.forRoot({})],
  declarations: [FeatureCreateTodoComponent],
  exports: [FeatureCreateTodoComponent],
  providers: [NbToastrService],
})
export class FeatureCreateTodoModule {}
