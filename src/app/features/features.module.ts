import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

//import { PagesComponent } from "./pages.component";
import { SharedModule } from "../shared/shared.module";
import { PagesComponent } from "./pages/pages.component";
import { TasksListComponent } from "./pages/tasks/tasks-list/tasks-list.component";
import { UsersListComponent } from "./pages/users/users-list/users-list.component";
import { LoginComponent } from "./auth/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PagesRountingModule } from "./pages/pages.routing.module";
import { PagesModule } from "./pages/pages.module";
import { FeatureRoutingModule } from "./features-routing.module";
import { MatIconModule } from "@angular/material/icon";
//import { PagesRountingModule } from "./pages.routing.module";

//Material 

//import { MatGridListModule } from '@angular/material/grid-list';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatTableModule } from '@angular/material/table';
// import { MatTabsModule } from '@angular/material/tabs';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatCardModule } from '@angular/material/card';
// import { LoginComponent } from "./auth/login/login.component";
// import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { UsersListComponent } from "./users/users-list/users-list.component";
// import { CoreModule } from "@angular/flex-layout";

@NgModule({
    declarations: [
        LoginComponent,

    ],
    exports: [
        LoginComponent
    ],
    providers: [],
    imports: [
        FeatureRoutingModule,
        RouterModule,
        SharedModule,
        PagesModule,
        CommonModule,
        MatIconModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class FeaturesModule { }