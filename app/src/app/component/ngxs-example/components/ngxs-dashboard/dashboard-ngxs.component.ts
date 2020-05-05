import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {StudentModel} from "../../../model/student.model";

@Component({
  selector: 'app-dashboard-ngxs',
  templateUrl: './dashboard-ngxs.component.html',
  styleUrls: ['./dashboard-ngxs.component.scss']
})
export class DashboardNgxsComponent implements OnInit {
  public studentForm: FormGroup;
  @Input() students: StudentModel[];
  @Output() removeStudent: EventEmitter<string> = new EventEmitter<string>()
  @Output() saveStudent: EventEmitter<StudentModel> = new EventEmitter<StudentModel>()
  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.studentForm = this.formBuilder.group( {
      id: null,
      name: '',
      course: '',
      averageMark: null
    })
  }

  public handleRemoveStudent(id: string) {
    this.removeStudent.emit(id)
  }

  public onSubmit(): void {
    this.saveStudent.emit(this.studentForm.value);
  }
}
