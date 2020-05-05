import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {StudentModel} from "../../../model/student.model";
import {ObserverProvider} from "../../providers/observer-provider";

@Component({
  selector: 'app-students-info-observer',
  templateUrl: './students-info-observer.component.html',
  styleUrls: ['./students-info-observer.component.scss'],
})
export class StudentsInfoObserverComponent {
  @Input() dataSource: StudentModel[];
  constructor(private observerProvider: ObserverProvider, private cdr: ChangeDetectorRef) { }

  public deleteStudent(student: StudentModel): void {
    this.observerProvider.publishStudent({student: student, action: this.observerProvider.actions.remove, students: this.dataSource})
  }

}
