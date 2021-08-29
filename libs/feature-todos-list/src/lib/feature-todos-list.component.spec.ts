import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTodosListComponent } from './feature-todos-list.component';

describe('FeatureTodosListComponent', () => {
  let component: FeatureTodosListComponent;
  let fixture: ComponentFixture<FeatureTodosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureTodosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureTodosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
