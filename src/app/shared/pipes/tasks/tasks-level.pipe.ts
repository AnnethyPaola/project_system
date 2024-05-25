import { Pipe, PipeTransform } from '@angular/core';
import { TasksLevel } from '../../enums/tasks/tasks-level.enum';

@Pipe({
  name: 'TasksLevelPipe'
})
export class TasksLevelPipe implements PipeTransform {

  transform(value: TasksLevel): string {
    switch (value) {
      case TasksLevel.low:
        return 'Bajo';
      case TasksLevel.hard:
        return 'Alto';
      case TasksLevel.medium:
        return 'Medio';
      default:
        return 'Desconocido';
    }
  }

}
