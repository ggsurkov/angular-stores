import {StudentModel} from "../../model/student.model";

export class AddStudent {
  static readonly type = '[StudentModel] Add Student';
  constructor(public payload: StudentModel) {}
}

export class RemoveStudent {
  static readonly type = '[Student] Remove Student';
  constructor(public payload: string) {}
}
