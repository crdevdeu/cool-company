import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail.routing.module';
import { FeatureDetailFormModule } from '@cool-company/feature-detail-form';

@NgModule({
  declarations: [DetailComponent],
  exports: [DetailComponent],
  imports: [CommonModule, FeatureDetailFormModule, DetailRoutingModule],
})
export class DetailModule {}
