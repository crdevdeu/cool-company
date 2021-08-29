import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureDetailFormComponent } from './feature-detail-form.component';
import { UiDetailFormModule } from '@cool-company/ui-detail-form';

@NgModule({
  imports: [CommonModule, UiDetailFormModule],
  declarations: [FeatureDetailFormComponent],
  exports: [FeatureDetailFormComponent],
})
export class FeatureDetailFormModule {}
