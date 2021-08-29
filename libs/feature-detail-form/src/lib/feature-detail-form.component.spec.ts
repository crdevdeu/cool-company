import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureDetailFormComponent } from './feature-detail-form.component';

describe('FeatureDetailFormComponent', () => {
  let component: FeatureDetailFormComponent;
  let fixture: ComponentFixture<FeatureDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureDetailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
