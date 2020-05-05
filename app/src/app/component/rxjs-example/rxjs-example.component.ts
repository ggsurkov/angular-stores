import {Component, OnInit} from '@angular/core';
import {RxjsStoreService} from "./store/rxjs-store.service";

@Component({
  selector: 'app-rxjs-example',
  templateUrl: './rxjs-example.component.html',
  styleUrls: ['./rxjs-example.component.scss']
})
export class RxjsExampleComponent implements OnInit {
  constructor(public rxjsStoreService: RxjsStoreService) {
  }

  ngOnInit() {

  }

}
