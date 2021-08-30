import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureDetailFormComponent } from './feature-detail-form.component';
import { UiDetailFormModule } from '@cool-company/ui-detail-form';
import { RouterModule } from '@angular/router';
import { SharedTodosStateModule } from '@cool-company/shared-todos-state';
import { NbToastrModule, NbToastrService } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    UiDetailFormModule,
    NbToastrModule.forRoot({}),
    RouterModule,
    SharedTodosStateModule,
  ],
  declarations: [FeatureDetailFormComponent],
  exports: [FeatureDetailFormComponent],
  providers: [NbToastrService],
})
export class FeatureDetailFormModule {}
