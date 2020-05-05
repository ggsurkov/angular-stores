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
import {ObserverExampleComponent} from "./component/observer-example/observer-example.component";
import {DashboardObserverComponent} from "./component/observer-example/dashboard/dashboard-observer.component";
import {StudentsInfoObserverComponent} from "./component/observer-example/dashboard/students-info/students-info-observer.component";
import {ObserverExampleService} from "./component/observer-example/services/observer-example.service";
import {ObserverProvider} from "./component/observer-example/providers/observer-provider";

@NgModule({
  declarations: [
    AppComponent,
    RxjsExampleComponent,
    NgxsExampleComponent,
    ObserverExampleComponent,
    DashboardComponent,
    DashboardNgxsComponent,
    DashboardObserverComponent,
    StudentsInfoComponent,
    StudentsInfoNgxsComponent,
    StudentsInfoObserverComponent
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
    }),

  ],
  providers: [ObserverExampleService, ObserverProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
