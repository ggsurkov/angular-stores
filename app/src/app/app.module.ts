import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsExampleComponent } from './component/rxjs-example/rxjs-example.component';
import { DashboardComponent } from './component/rxjs-example/dashboard/dashboard.component';
import { StudentsInfoComponent } from './component/rxjs-example/dashboard/students-info/students-info.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {NgxsModule} from "@ngxs/store";
import {environment} from "../environments/environment.prod";
import {NgxsExampleComponent} from "./component/ngxs-example/container/ngxs-example.component";
import {DashboardNgxsComponent} from "./component/ngxs-example/components/ngxs-dashboard/dashboard-ngxs.component";
import {StudentsInfoNgxsComponent} from "./component/ngxs-example/components/ngxs-dashboard/students-info/students-info-ngxs.component";
import {NgxsExampleState} from "./component/ngxs-example/state/ngxs-example.state";

@NgModule({
  declarations: [
    AppComponent,
    RxjsExampleComponent,
    NgxsExampleComponent,
    DashboardComponent,
    DashboardNgxsComponent,
    StudentsInfoComponent,
    StudentsInfoNgxsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    NgxsModule.forRoot([NgxsExampleState], {
      developmentMode: !environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
