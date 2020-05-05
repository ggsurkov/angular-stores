import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {StudentModel} from "../../model/student.model";
import {ObserverProvider} from "../providers/observer-provider";

@Component({
  selector: 'app-dashboard-observer',
  templateUrl: './dashboard-observer.component.html',
  styleUrls: ['./dashboard-observer.component.scss'],
})
export class DashboardObserverComponent implements OnInit {
  public studentForm: FormGroup;
  @Input() students: StudentModel[];

  constructor(private formBuilder: FormBuilder, private observerProvider: ObserverProvider) {
  }

  public ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      name: '',
      course: '',
      averageMark: null,
      id: null
    })
  }

  public onSubmit(): void {
    this.observerProvider.publishStudent({
      student: this.studentForm.value,
      action: this.observerProvider.actions.add,
      students: this.students
    })
  }
}
