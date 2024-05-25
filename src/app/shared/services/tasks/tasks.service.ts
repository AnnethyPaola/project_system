import { Injectable } from '@angular/core';
import { apiServiceTasks } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Tasks } from '../../interfaces/tasks/tasks';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  public urlApi: string = environment.API;

  constructor(private http: HttpClient) { }

  public getTasks(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(`${this.urlApi}`).pipe(
      map((data: any) => data.tasks)
    );
  }


}
