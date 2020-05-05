import {Component, Input, OnInit} from '@angular/core';
import {RxjsStoreService} from "../../store/rxjs-store.service";
import {StudentModel} from "../../../model/student.model";
import {RxjsStoreDataModel} from "../../store/rxjs-store.model";

@Component({
  selector: 'app-students-info',
  templateUrl: './students-info.component.html',
  styleUrls: ['./students-info.component.scss']
})
export class StudentsInfoComponent implements OnInit {
  @Input() dataSource: StudentModel[];
  constructor(private rxjsStoreService: RxjsStoreService) { }

  ngOnInit() {

  }

  public deleteStudent(id: string): void {
    this.rxjsStoreService.removeStudent(id).then((data: RxjsStoreDataModel) => {
      console.log('deletedStudent success! ', data);
    });
  }

}
