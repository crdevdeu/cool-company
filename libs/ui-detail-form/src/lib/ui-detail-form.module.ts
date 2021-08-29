import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiDetailFormComponent } from './ui-detail-form.component';
import {
  NbCardModule,
  NbInputModule,
  NbIconModule,
  NbButtonModule,
} from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbIconModule,
    NbButtonModule,
  ],
  declarations: [UiDetailFormComponent],
  exports: [UiDetailFormComponent],
})
export class UiDetailFormModule {}
