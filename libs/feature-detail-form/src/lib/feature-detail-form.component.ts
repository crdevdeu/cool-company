import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cool-company-feature-detail-form',
  templateUrl: './feature-detail-form.component.html',
  styleUrls: ['./feature-detail-form.component.css'],
})
export class FeatureDetailFormComponent implements OnInit {
  todo = {
    name: 'do this thing',
    id: '3256',
    description: 'something i have to do',
    task: {
      id: 'taskid',
      name: 'task name',
      description: 'this is the description of a task',
    },
  };
  constructor() {}

  ngOnInit(): void {
    console.log('detail form is instantiated');
  }

  onDeleteTodo($event: any) {
    console.log($event);
  }
}
