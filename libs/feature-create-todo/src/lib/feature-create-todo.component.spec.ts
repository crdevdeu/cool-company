import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureCreateTodoComponent } from './feature-create-todo.component';

describe('FeatureCreateTodoComponent', () => {
  let component: FeatureCreateTodoComponent;
  let fixture: ComponentFixture<FeatureCreateTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureCreateTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureCreateTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
