import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodosFacade } from '@cool-company/shared-todos-state';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'cool-company-feature-detail-form',
  templateUrl: './feature-detail-form.component.html',
  styleUrls: ['./feature-detail-form.component.css'],
})
export class FeatureDetailFormComponent implements OnInit {
  todo: any;
  id: any;

  constructor(
    private router: Router,
    private todosFacade: TodosFacade,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.todosFacade.selectedTodos$
      .pipe(filter((todo: any) => todo && todo.id === this.id))
      .subscribe((selectedTodo: any) => {
        console.log(selectedTodo);
        if (selectedTodo) {
          this.todo = selectedTodo;
        }
      });

    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.todosFacade.init();
      this.todosFacade.getTodo(this.id);
    });
  }

  onSaveEditedTodo($event: any) {
    console.log($event);
  }

  onBackButtonClick($event: any) {
    this.router.navigateByUrl('/');
  }
}
