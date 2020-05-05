import {Injectable} from "@angular/core";
import {setDefaultStudent, StudentModel} from "../../model/student.model";

@Injectable()
export class ObserverExampleService {
  constructor() {
  }

  public getAllStudents(): StudentModel[] {
    return [setDefaultStudent(), setDefaultStudent()];
  }
}
