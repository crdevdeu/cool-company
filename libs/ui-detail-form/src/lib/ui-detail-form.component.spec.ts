import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDetailFormComponent } from './ui-detail-form.component';

describe('UiDetailFormComponent', () => {
  let component: UiDetailFormComponent;
  let fixture: ComponentFixture<UiDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiDetailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
