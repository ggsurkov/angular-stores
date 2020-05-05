import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {StudentModel} from "../../model/student.model";

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor() { }

  public getAll():Promise<StudentModel[]> {
    return new Promise((resolve, reject) => {})
  }

  public create(student: StudentModel): Promise<StudentModel> {
    return new Promise((resolve, reject) => {});
  }
  public remove(id: string): Promise<string> {
    return new Promise((resolve, reject) => {});
  }
}
