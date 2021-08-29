import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'cool-company-ui-todo-list',
  templateUrl: './ui-todo-list.component.html',
  styleUrls: ['./ui-todo-list.component.css'],
})
export class UiTodoListComponent implements OnInit {
  todoToEdit: any = null;
  todosFormGroup: FormGroup;
  @Input() todos: any[] = [];
  @Output() saveTodo = new EventEmitter<any>();
  constructor(private fb: FormBuilder) {
    this.todosFormGroup = this.fb.group({
      editTodo: [''],
    });
  }

  ngOnInit(): void {}

  setTodoToEdit(todo: any) {
    this.todoToEdit = todo.id;
    this.todosFormGroup.get('editTodo')?.setValue(todo.name);
  }

  saveTodoEdit(todo: any) {
    // this.todoToEdit = null;
    const todoNewValue = {
      id: todo.id,
      name: this.todosFormGroup.get('editTodo')?.value,
    };
    this.saveTodo.emit(todoNewValue);
  }
}
