import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'cool-company-ui-create-todo',
  templateUrl: './ui-create-todo.component.html',
  styleUrls: ['./ui-create-todo.component.css'],
})
export class UiCreateTodoComponent implements OnInit {
  newTodoFormGroup: FormGroup;

  @Output() saveTodo = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.newTodoFormGroup = this.fb.group({
      newTodo: [''],
    });
  }

  ngOnInit(): void {}

  saveNewTodo() {
    const newTodoValue = this.newTodoFormGroup.get('newTodo')?.value;
    this.saveTodo.emit({
      name: newTodoValue,
      description: '',
      task: { name: '', description: '' },
    });
  }
}
