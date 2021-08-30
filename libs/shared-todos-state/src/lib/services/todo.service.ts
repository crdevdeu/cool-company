import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../apps/cool-todo/src/environments/environment';

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get(`${environment.apiHost}/api/todos`);
  }

  createTodo(todo: any) {
    return this.http.post(`${environment.apiHost}/api/todos`, todo);
  }

  getTodo(id: string) {
    return this.http.get(`${environment.apiHost}/api/todos/${id}`);
  }
}
