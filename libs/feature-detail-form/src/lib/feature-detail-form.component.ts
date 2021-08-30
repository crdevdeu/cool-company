import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodosFacade } from '@cool-company/shared-todos-state';
import { NbToastrService } from '@nebular/theme';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'cool-company-feature-detail-form',
  templateUrl: './feature-detail-form.component.html',
  styleUrls: ['./feature-detail-form.component.css'],
})
export class FeatureDetailFormComponent implements OnInit {
  todo: any;
  id: any;
  updateInProgress = false;

  constructor(
    private router: Router,
    private todosFacade: TodosFacade,
    private route: ActivatedRoute,
    private toastrService: NbToastrService
  ) {}

  ngOnInit(): void {
    this.todosFacade.selectedTodos$
      .pipe(filter((todo: any) => todo && todo.id === this.id))
      .subscribe((selectedTodo: any) => {
        if (selectedTodo) {
          this.todo = selectedTodo;

          if (this.updateInProgress) {
            this.updateInProgress = false;
            this.showToast('top-right', 'info');
          }
        }
      });

    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.todosFacade.init();
      this.todosFacade.getTodo(this.id);
    });
  }

  onSaveEditedTodo(todo: any) {
    this.updateInProgress = true;
    this.todosFacade.editTodo(this.id, todo);
  }

  onBackButtonClick($event: any) {
    this.router.navigateByUrl('/');
  }

  showToast(position: any, status: any) {
    this.toastrService.show('Success', `Todo Edited`, {
      position,
      status,
      icon: '',
    });
  }
}
