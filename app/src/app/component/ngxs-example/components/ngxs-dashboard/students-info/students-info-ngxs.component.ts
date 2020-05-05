import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StudentModel} from "../../../../model/student.model";

@Component({
  selector: 'app-students-info-ngxs',
  templateUrl: './students-info-ngxs.component.html',
  styleUrls: ['./students-info-ngxs.component.scss']
})
export class StudentsInfoNgxsComponent implements OnInit {
  @Input() dataSource: StudentModel[];
  @Output() removeStudent: EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit() {

  }

  public deleteStudent(id: string): void {
    this.removeStudent.emit(id);
  }

}
