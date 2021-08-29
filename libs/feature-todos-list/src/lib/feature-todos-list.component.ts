import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cool-company-feature-todos-list',
  templateUrl: './feature-todos-list.component.html',
  styleUrls: ['./feature-todos-list.component.css'],
})
export class FeatureTodosListComponent implements OnInit {
  mockTodos = [
    { name: 'have fun', id: '1234' },
    { name: 'do this thing', id: '3256' },
  ];

  constructor() {}

  ngOnInit(): void {}

  onTodoSave($event: any) {
    console.log($event);
  }
}
