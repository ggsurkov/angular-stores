import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RxjsExampleComponent} from "./component/rxjs-example/rxjs-example.component";
import {NgxsExampleComponent} from "./component/ngxs-example/container/ngxs-example.component";
import {ObserverExampleComponent} from "./component/observer-example/observer-example.component";

const routes: Routes = [
  {
    path: 'rxjs-example',
    component: RxjsExampleComponent
  },
  {
    path: 'ngxs-example',
    component: NgxsExampleComponent
  },
  {
    path: 'observer-example',
    component: ObserverExampleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
