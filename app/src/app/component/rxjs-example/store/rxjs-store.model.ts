import {BehaviorSubject, Observable} from "rxjs";
import {StudentModel} from "../../model/student.model";
import {DepartmentModel} from "../../model/department.model";

export interface RxjsStoreModel {
  students: BehaviorSubject<StudentModel[]>
  departments: BehaviorSubject<DepartmentModel[]>
}

export interface RxjsStoreDataModel {
  students: StudentModel[]
  departments: DepartmentModel[]
}

export interface RxjsStatesModel {
  students$: Observable<StudentModel[]>;
  departments$: Observable<DepartmentModel[]>;
}

export function setRxJsStore(): RxjsStoreModel {
  return {
    students: new BehaviorSubject<StudentModel[]>([]),
    departments: new BehaviorSubject<DepartmentModel[]>([]),
  }
}

export function setRxJsStates(): RxjsStatesModel {
  return {
    students$: new Observable<StudentModel[]>(),
    departments$: new Observable<DepartmentModel[]>(),
  }
}


