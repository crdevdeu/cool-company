import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureDetailFormComponent } from './feature-detail-form.component';
import { UiDetailFormModule } from '@cool-company/ui-detail-form';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, UiDetailFormModule, RouterModule],
  declarations: [FeatureDetailFormComponent],
  exports: [FeatureDetailFormComponent],
})
export class FeatureDetailFormModule {}
