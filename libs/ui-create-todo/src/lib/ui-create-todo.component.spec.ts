import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCreateTodoComponent } from './ui-create-todo.component';

describe('UiCreateTodoComponent', () => {
  let component: UiCreateTodoComponent;
  let fixture: ComponentFixture<UiCreateTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiCreateTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiCreateTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
