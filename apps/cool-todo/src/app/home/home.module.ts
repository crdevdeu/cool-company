import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { FeatureTodosListModule } from '@cool-company/feature-todos-list';
import { FeatureCreateTodoModule } from '@cool-company/feature-create-todo';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FeatureTodosListModule,
    FeatureCreateTodoModule,
  ],
})
export class HomeModule {}
