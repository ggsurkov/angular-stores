import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {

  }
  public goToRxJsExample() {
    this.router.navigateByUrl('rxjs-example')
  }
  public goToNgXsExample() {
    this.router.navigateByUrl('ngxs-example')
  }
  public goToObserverExample() {
    this.router.navigateByUrl('observer-example')
  }
}
