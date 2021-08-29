import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTodoListComponent } from './ui-todo-list.component';

describe('UiTodoListComponent', () => {
  let component: UiTodoListComponent;
  let fixture: ComponentFixture<UiTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiTodoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
