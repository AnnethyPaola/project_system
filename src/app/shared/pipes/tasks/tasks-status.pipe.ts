import { Pipe, PipeTransform } from '@angular/core';
import { TasksStatus } from '../../enums/tasks/tasks-status.enum';

@Pipe({
  name: 'TasksStatusPipe'
})
export class TasksStatusPipe implements PipeTransform {

  transform(value: TasksStatus): string {
    switch (value) {
      case TasksStatus.pending:
        return 'Pendiente';
      case TasksStatus.completed:
        return 'Completado';
      case TasksStatus.inProgress:
        return 'En proceso';
      case TasksStatus.stopper:
        return 'En stopper';
      default:
        return 'Desconocido';
    }
  }

}
