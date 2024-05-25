import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsersService } from './users.service';
import { Users } from '../../interfaces/users/users';
import { UsersStatus } from '../../enums/users/users-status.enum';

describe('UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService]
    });
  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));

  it('should fetch users successfully', inject([UsersService, HttpTestingController], (service: UsersService, httpMock: HttpTestingController) => {
    const mockUsers: Users[] = [
      { id: "1", userName: 'user1', email: 'user1@example.com', password: 'password1', status: UsersStatus.active, deleted: false },
      { id: "2", userName: 'user2', email: 'user2@example.com', password: 'password2', status: UsersStatus.blocked,  deleted: false  }
    ];

    service.getUsers().subscribe(
      users => {
        expect(users).toEqual(mockUsers);
      },
      error => {
        fail('Expected successful response, but got an error: ' + error.message);
      }
    );

    const req = httpMock.expectOne(service.urlApi);
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  }));

  it('should handle server error when fetching users', inject([UsersService, HttpTestingController], (service: UsersService, httpMock: HttpTestingController) => {
    service.getUsers().subscribe(
      users => {
        fail('Expected an error response, but received users: ' + JSON.stringify(users));
      },
      error => {
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
