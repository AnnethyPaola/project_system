import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../auth/login/login.component';
import { ExceptionComponent } from '../../core/exception/exception.component';
import { UsersListComponent } from './users/users-list/users-list.component';

const routes: Routes = [

    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'tasks/list',
        component: TasksListComponent,
    },

    {
        path: 'users/list',
        component: UsersListComponent,
    },

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRountingModule { }