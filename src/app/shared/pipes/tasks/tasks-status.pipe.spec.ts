import { TasksStatusPipe } from './tasks-status.pipe';
import { TasksStatus } from '../../enums/tasks/tasks-status.enum';

describe('Pipe: TasksStatus', () => {
  let pipe: TasksStatusPipe;

  beforeEach(() => {
    pipe = new TasksStatusPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform TasksStatus.pending to "Pendiente"', () => {
    const result = pipe.transform(TasksStatus.pending);
    expect(result).toEqual('Pendiente');
  });

  it('should transform TasksStatus.completed to "Completado"', () => {
    const result = pipe.transform(TasksStatus.completed);
    expect(result).toEqual('Completado');
  });

  it('should transform TasksStatus.inProgress to "En proceso"', () => {
    const result = pipe.transform(TasksStatus.inProgress);
    expect(result).toEqual('En proceso');
  });

  it('should transform TasksStatus.stopper to "En stopper"', () => {
    const result = pipe.transform(TasksStatus.stopper);
    expect(result).toEqual('En stopper');
  });

  it('should return "Desconocido" for an unknown TasksStatus', () => {
    const result = pipe.transform('unknown' as unknown as TasksStatus);
    expect(result).toEqual('Desconocido');
  });
});
