import { Injectable } from '@angular/core';

@Injectable()
export class ApiDecoderService {
  decodeTodoFromApi(todo: any) {
    const { name, description, task } = todo.data;
    const id = todo.ref['@ref'].id;

    return {
      id,
      name,
      description,
      task: { ...task, id },
    };
  }
}
