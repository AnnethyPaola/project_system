import { Pipe, PipeTransform } from '@angular/core';
import { UsersStatus } from '../../enums/users/users-status.enum';

@Pipe({
  name: 'UsersStatusPipe'
})
export class UsersStatusPipe implements PipeTransform {

  transform(value: UsersStatus): string {
    switch (value) {
      case UsersStatus.active:
        return 'Activo';
      case UsersStatus.blocked:
        return 'Bloqueado';
      case UsersStatus.inactive:
        return 'Inactivo';
      default:
        return 'Desconocido';
    }
  }

}
