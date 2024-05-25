import { TasksLevelPipe } from './tasks-level.pipe';
import { TasksLevel } from '../../enums/tasks/tasks-level.enum';

describe('Pipe: TasksLevel', () => {
  let pipe: TasksLevelPipe;

  beforeEach(() => {
    pipe = new TasksLevelPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform TasksLevel.low to "Bajo"', () => {
    const result = pipe.transform(TasksLevel.low);
    expect(result).toEqual('Bajo');
  });

  it('should transform TasksLevel.medium to "Medio"', () => {
    const result = pipe.transform(TasksLevel.medium);
    expect(result).toEqual('Medio');
  });

  it('should transform TasksLevel.hard to "Alto"', () => {
    const result = pipe.transform(TasksLevel.hard);
    expect(result).toEqual('Alto');
  });

  it('should return "Desconocido" for an unknown TasksLevel', () => {
    const result = pipe.transform('unknown' as unknown as TasksLevel);
    expect(result).toEqual('Desconocido');
  });
});
