import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureDetailFormComponent } from './feature-detail-form.component';
import { UiDetailFormModule } from '@cool-company/ui-detail-form';
import { RouterModule } from '@angular/router';
import { SharedTodosStateModule } from '@cool-company/shared-todos-state';

@NgModule({
  imports: [
    CommonModule,
    UiDetailFormModule,
    RouterModule,
    SharedTodosStateModule,
  ],
  declarations: [FeatureDetailFormComponent],
  exports: [FeatureDetailFormComponent],
})
export class FeatureDetailFormModule {}
