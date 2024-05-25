import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PagesComponent } from './pages/pages.component';
import { ExceptionComponent } from '../core/exception/exception.component';
import { AuthGuard } from '../shared/guard/guards.guard';


const routes: Routes = [

    {
        path: 'pages',
        loadChildren: () =>
            import('./pages/pages.module').then((m) => m.PagesModule),
        component: PagesComponent,
        canActivate: [AuthGuard]
    },

    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: '',
        redirectTo: 'pages/home',
        pathMatch: 'full'
    },

    {
        path: '**',
        component: ExceptionComponent
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FeatureRoutingModule { }