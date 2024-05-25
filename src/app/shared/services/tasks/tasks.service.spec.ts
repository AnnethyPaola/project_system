import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TasksService } from './tasks.service';
import { Tasks } from '../../interfaces/tasks/tasks';
import { TasksStatus } from '../../enums/tasks/tasks-status.enum';
import { TasksLevel } from '../../enums/tasks/tasks-level.enum';

describe('TasksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TasksService]
    });
  });

  it('should be created', inject([TasksService], (service: TasksService) => {
    expect(service).toBeTruthy();
  }));

  it('should fetch tasks', inject([TasksService, HttpTestingController], (service: TasksService, httpMock: HttpTestingController) => {
    const mockTasks: Tasks[] = [
      { id: "1", code: "TASK001", title: 'Task 1', description: 'Description 1', score: 5, status: TasksStatus.pending, level: TasksLevel.hard, deleted: false },
      { id: "2", code: "TASK002", title: 'Task 2', description: 'Description 2', score: 10, status: TasksStatus.completed, level: TasksLevel.hard, deleted: false }
    ];

    service.getTasks().subscribe(tasks => {
      expect(tasks).toEqual(mockTasks);
    });

    const req = httpMock.expectOne(service.urlApi);
    expect(req.request.method).toBe('GET');
    req.flush(mockTasks);
  }));

  it('should handle server error when fetching users', inject([TasksService, HttpTestingController], (service: TasksService, httpMock: HttpTestingController) => {
    service.getTasks().subscribe(
      (tasks: any) => {
        fail('Expected an error response, but received users: ' + JSON.stringify(tasks));
      },
      (error: { status: any; }) => {
        expect(error.status).toBe(500);
      }
    );

    const req = httpMock.expectOne(service.urlApi);
    expect(req.request.method).toBe('GET');
    req.error(new ErrorEvent('Server error'), { status: 500 });
  }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});