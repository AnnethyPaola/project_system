import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TasksListComponent } from './tasks-list.component';
import { TasksService } from '../../../../shared/services/tasks/tasks.service';
import { Tasks } from '../../../../shared/interfaces/tasks/tasks';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '../../../../shared/shared.module'; // Importa el módulo que contiene el pipe
import { TasksLevel } from '../../../../shared/enums/tasks/tasks-level.enum';
import { TasksStatus } from '../../../../shared/enums/tasks/tasks-status.enum';

class MockTasksService {
  getTasks() {
    const tasks: Tasks[] = [
      { id: "1", code: "1", score: 3, title: 'task1', status: TasksStatus.completed, description: 'description1', level: TasksLevel.hard, deleted: false },
      { id: "2", code: "2", score: 2, title: 'task2', status: TasksStatus.completed, description: 'description2', level: TasksLevel.hard, deleted: false }
    ];
    return of(tasks);
  }
}

describe('TasksListComponent', () => {
  let component: TasksListComponent;
  let fixture: ComponentFixture<TasksListComponent>;
  let tasksService: TasksService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TasksListComponent],
      imports: [
        HttpClientTestingModule,
        SharedModule // Importa el módulo que contiene el pipe
      ],
      providers: [
        { provide: TasksService, useClass: MockTasksService } // Usar el servicio falso
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksListComponent);
    component = fixture.componentInstance;
    tasksService = TestBed.inject(TasksService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch tasks', () => {
    component.getTasks();
    fixture.detectChanges();

    expect(component.tasks.length).toBe(2);
    expect(component.tasks[0].title).toBe('task1');
    expect(component.tasks[1].title).toBe('task2');
  });
});
