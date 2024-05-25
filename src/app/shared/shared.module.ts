import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TasksLevelPipe } from "./pipes/tasks/tasks-level.pipe";
import { TasksStatusPipe } from "./pipes/tasks/tasks-status.pipe";
import { UsersStatusPipe } from "./pipes/users/users-status.pipe";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { UsersService } from "./services/users/users.service";
;

@NgModule({
    declarations: [
        TasksLevelPipe,
        TasksStatusPipe,
        UsersStatusPipe
    ],
    exports: [
        TasksLevelPipe,
        TasksStatusPipe,
        UsersStatusPipe
    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule
    ],
    providers: [
        UsersService // Asegúrate de que UsersService esté incluido en los providers si es necesario
    ]

})

export class SharedModule { }