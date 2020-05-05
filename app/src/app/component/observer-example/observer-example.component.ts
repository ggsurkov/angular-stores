import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {StudentModel} from "../model/student.model";
import {ObserverExampleService} from "./services/observer-example.service";
import {ObserverDataModel, ObserverProvider} from "./providers/observer-provider";

@Component({
  selector: 'app-observer-example',
  templateUrl: './observer-example.component.html',
  styleUrls: ['./observer-example.component.scss']
})
export class ObserverExampleComponent implements OnInit, OnDestroy {
  public students: StudentModel[] = this.observerExampleService.getAllStudents();
  public studentsObserver: EventEmitter<ObserverDataModel> = new EventEmitter<ObserverDataModel>();

  constructor(private observerExampleService: ObserverExampleService,
              private observerProvider: ObserverProvider) {
  }

  ngOnInit() {
    this.observerProvider.addSubscriber(this.studentsObserver)
    this.studentsObserver.subscribe((data: ObserverDataModel) => {
      this.students = this.observerProvider.updateData(data)
    })
  }

  ngOnDestroy() {
    this.observerProvider.removeSubscriber(this.studentsObserver)
  }


}
