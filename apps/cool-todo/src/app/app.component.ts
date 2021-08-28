import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'cool-company-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'cool-todo';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(`${environment.apiHost}/api/todos`).subscribe(
      (todos) => {
        console.log(todos);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
