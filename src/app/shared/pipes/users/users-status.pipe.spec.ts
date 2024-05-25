import { UsersStatusPipe } from './users-status.pipe';
import { UsersStatus } from '../../enums/users/users-status.enum';

describe('Pipe: UsersStatus', () => {
  let pipe: UsersStatusPipe;

  beforeEach(() => {
    pipe = new UsersStatusPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform UsersStatus.active to "Activo"', () => {
    const result = pipe.transform(UsersStatus.active);
    expect(result).toEqual('Activo');
  });

  it('should transform UsersStatus.blocked to "Bloqueado"', () => {
    const result = pipe.transform(UsersStatus.blocked);
    expect(result).toEqual('Bloqueado');
  });

  it('should transform UsersStatus.inactive to "Inactivo"', () => {
    const result = pipe.transform(UsersStatus.inactive);
    expect(result).toEqual('Inactivo');
  });

  it('should return "Desconocido" for an unknown UsersStatus', () => {
    const result = pipe.transform('unknown' as unknown as UsersStatus);
    expect(result).toEqual('Desconocido');
  });
});
