import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { NbLayoutModule, NbSidebarModule, NbIconModule } from '@nebular/theme';
import { FeatureTodosListModule } from '@cool-company/feature-todos-list';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    NbIconModule,
    CommonModule,
    HomeRoutingModule,
    FeatureTodosListModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
  ],
})
export class HomeModule {}
