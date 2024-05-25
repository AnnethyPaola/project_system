import { HttpClientModule, withFetch ,provideHttpClient} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//import { SharedModule } from './shared/shared.module';
//import { PagesModule } from './pages/pages.module';
import { CoreModule } from './core/core.module';
//import { TasksService } from './shared/services/tasks/tasks.service';
//import { UsersService } from './shared/services/users/users.service';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
    ],
    imports: [
        AppRoutingModule,
        CoreModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        //SharedModule,
        //PagesModule,
        //CommonModule,
        CoreModule,
        RouterModule
    ],
    providers: [
        //TasksService, 
        //UsersService,
        provideHttpClient(withFetch())

    ],
    bootstrap: [AppComponent]
})
export class AppChildModule { }