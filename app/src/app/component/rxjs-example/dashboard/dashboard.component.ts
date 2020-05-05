import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RxjsStoreService} from "../store/rxjs-store.service";
import {StudentModel} from "../../model/student.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public studentForm: FormGroup;
  @Input() students: StudentModel[];
  constructor(private formBuilder: FormBuilder, private rxjsStoreService: RxjsStoreService) { }

  public ngOnInit(): void {
    this.studentForm = this.formBuilder.group( {
      name: '',
      course: '',
      averageMark: null,
      id: null
    })
  }

  public onSubmit(): void {
    this.rxjsStoreService.addStudent(this.studentForm.value)
  }
}
