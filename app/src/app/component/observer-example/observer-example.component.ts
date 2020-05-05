import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  NgZone,
  OnDestroy,
  OnInit
} from '@angular/core';
import {setDefaultStudent, StudentModel} from "../model/student.model";
import {ObserverExampleService} from "./services/observer-example.service";
import {ObserverDataModel, ObserverProvider} from "./providers/observer-provider";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {ChangeDetection} from "@angular/cli/lib/config/schema";

@Component({
  selector: 'app-observer-example',
  templateUrl: './observer-example.component.html',
  styleUrls: ['./observer-example.component.scss']
})
export class ObserverExampleComponent implements OnInit, OnDestroy {
  public students: StudentModel[] = this.observerExampleService.getAllStudents();
  public studentsObserver: EventEmitter<ObserverDataModel> = new EventEmitter<ObserverDataModel>();
  constructor(private observerExampleService: ObserverExampleService,
              private observerProvider: ObserverProvider) { }

  ngOnInit() {
    this.observerProvider.addSubscriber(this.studentsObserver)
    // this.students ;
    this.studentsObserver.subscribe((data: ObserverDataModel) => {
      this.students = this.observerProvider.updateData(data)
    })
  }

  ngOnDestroy() {
    this.observerProvider.removeSubscriber(this.studentsObserver)
  }


}
