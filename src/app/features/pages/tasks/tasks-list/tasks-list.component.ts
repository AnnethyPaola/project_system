import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { TasksService } from '../../../../shared/services/tasks/tasks.service';
import { Tasks } from '../../../../shared/interfaces/tasks/tasks';


@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent implements OnInit {

  public displayedColumns: string[] = ['code', 'title', 'description', 'status', 'level'];
  public tasks: Tasks[] = [];


  constructor(
    private tastksService: TasksService
  ) { }

  ngOnInit() {
    this.getTasks();
  }

  public getTasks() {
    this.tastksService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    })
  }

}
