import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cool-company-feature-todos-list',
  templateUrl: './feature-todos-list.component.html',
  styleUrls: ['./feature-todos-list.component.css'],
})
export class FeatureTodosListComponent implements OnInit {
  mockTodos = [{ description: 'have fun' }];

  constructor() {}

  ngOnInit(): void {}
}
