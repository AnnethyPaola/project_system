import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersListComponent } from './users-list.component';
import { UsersService } from '../../../../shared/services/users/users.service';
import { Users } from '../../../../shared/interfaces/users/users';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '../../../../shared/shared.module'; // Importa el módulo que contiene el pipe

// Crear un servicio falso
class MockUsersService {
  getUsers() {
    const users: Users[] = [
      { id: "1", userName: 'user1', email: 'user1@example.com', password: 'password1', status: 0, deleted: false },
      { id: "2", userName: 'user2', email: 'user2@example.com', password: 'password2', status: 1, deleted: false }
    ];
    return of(users);
  }
}

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;
  let usersService: UsersService; 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListComponent ],
      imports: [ 
        HttpClientTestingModule, 
        SharedModule // Importa el módulo que contiene el pipe
      ],
      providers: [
        { provide: UsersService, useClass: MockUsersService } // Usar el servicio falso
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    usersService = TestBed.inject(UsersService); 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch users', () => {
    component.getUsers();
    fixture.detectChanges();

    expect(component.users.length).toBe(2);
    expect(component.users[0].userName).toBe('user1');
    expect(component.users[1].userName).toBe('user2');
  });
});
