import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onTodoEdit($event: any) {
    console.log($event);
    this.router.navigateByUrl('detail');
  }

  onTodoRemove($event: any) {
    console.log($event);
  }
}
