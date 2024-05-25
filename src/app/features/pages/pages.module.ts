import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages.component";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../../shared/shared.module";
import { PagesRountingModule } from "./pages.routing.module";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AppComponent } from "../../app.component";
import { CoreModule } from "../../core/core.module";
import { TasksListComponent } from "./tasks/tasks-list/tasks-list.component";
import { UsersListComponent } from "./users/users-list/users-list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        TasksListComponent,
        UsersListComponent
    ],

    imports: [
        CoreModule,
        SharedModule,
        PagesRountingModule,
        CommonModule,
        RouterModule,
    ],

    exports: [
        PagesComponent,
        HomeComponent,
        TasksListComponent,
        UsersListComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class PagesModule { }