import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'cool-company-ui-detail-form',
  templateUrl: './ui-detail-form.component.html',
  styleUrls: ['./ui-detail-form.component.css'],
})
export class UiDetailFormComponent implements OnInit {
  detailForm: FormGroup;
  @Input() todo: any;
  @Output() saveEditedTodo = new EventEmitter<any>();
  @Output() backButtonClick = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.detailForm = this.fb.group({
      todoName: [''],
      todoDescription: [''],
      taskName: [''],
      taskDescription: [''],
    });
  }

  ngOnInit(): void {
    this.detailForm.setValue({
      todoName: this.todo.name,
      todoDescription: this.todo.description,
      taskName: this.todo.task.name,
      taskDescription: this.todo.task.description,
    });
  }

  triggerSaveEditedTodo() {
    const todo = this.getTodoFromForm();
    this.saveEditedTodo.emit(todo);
  }

  navigateBack() {
    this.backButtonClick.emit();
  }

  private getTodoFromForm() {
    return {
      name: this.detailForm.value.todoName,
      description: this.detailForm.value.todoDescription,
      task: {
        name: this.detailForm.value.taskName,
        description: this.detailForm.value.taskDescription,
      },
    };
  }
}
