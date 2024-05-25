import { Injectable } from '@angular/core';
import { apiServiceUsers } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Users } from '../../interfaces/users/users';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public urlApi: string = environment.API;

  constructor(
    private http: HttpClient
  ) { }

  public getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.urlApi}`).pipe(
      map((data: any) => data.users)
    );
  }

}
