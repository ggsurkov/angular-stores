import { Component, OnInit } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {StudentModel} from "../../model/student.model";
import {AddStudent, RemoveStudent} from "../actions/ngxs-example.actions";

@Component({
  selector: 'app-ngxs-example',
  templateUrl: './ngxs-example.component.html',
  styleUrls: ['./ngxs-example.component.scss']
})
export class NgxsExampleComponent implements OnInit {
  @Select(state => state.ngxsExampleState.students)
  students$: Observable<StudentModel[]>;
  constructor(private store: Store) { }

  ngOnInit() {
  }

  public handleRemoveStudent(id: string) {
    this.store.dispatch(new RemoveStudent(id)).subscribe((data) => {
      console.log('Ngxs remove student success! ', data);
    });
  }

  public handleSaveStudent(student: StudentModel) {
    this.store.dispatch(new AddStudent(student)).subscribe((data) => {
      console.log('Ngxs add student success! ', data);
    });
  }

}
