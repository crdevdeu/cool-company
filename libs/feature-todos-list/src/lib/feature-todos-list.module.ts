import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureTodosListComponent } from './feature-todos-list.component';
import { UiTodosListModule } from '@cool-company/ui-todos-list';

@NgModule({
  imports: [CommonModule, UiTodosListModule],
  declarations: [FeatureTodosListComponent],
  exports: [FeatureTodosListComponent],
})
export class FeatureTodosListModule {}
