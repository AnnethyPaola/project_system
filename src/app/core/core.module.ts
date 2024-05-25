import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";
import { ExceptionComponent } from "./exception/exception.component";

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
    declarations: [
        NavbarComponent,
        ExceptionComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        //BrowserAnimationsModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule
    ],
    exports: [
        NavbarComponent,
        ExceptionComponent
    ],
    providers: [],
    bootstrap: []
})
export class CoreModule { }
