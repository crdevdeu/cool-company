import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureTodosListComponent } from './feature-todos-list.component';
import { UiTodosListModule } from '@cool-company/ui-todos-list';
import { RouterModule } from '@angular/router';
import { SharedTodosStateModule } from '@cool-company/shared-todos-state';

@NgModule({
  imports: [
    CommonModule,
    UiTodosListModule,
    RouterModule,
    SharedTodosStateModule,
  ],
  declarations: [FeatureTodosListComponent],
  exports: [FeatureTodosListComponent],
})
export class FeatureTodosListModule {}
