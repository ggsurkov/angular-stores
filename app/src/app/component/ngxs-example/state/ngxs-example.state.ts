import {setDefaultStudent, StudentModel} from "../../model/student.model";
import {DepartmentModel} from "../../model/department.model";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {AddStudent, RemoveStudent} from "../actions/ngxs-example.actions";
import {setGuid} from "../../../guid.util";

export interface NgxsExampleStateModel {
  students: StudentModel[]
  departments: DepartmentModel[]
}

const defaultNgxsExampleStateModel: NgxsExampleStateModel = {
  students: [setDefaultStudent(), setDefaultStudent()],
  departments: [],
};

@State<NgxsExampleStateModel>({
  name: 'ngxsExampleState',
  defaults: defaultNgxsExampleStateModel,
  children: []
})
export class NgxsExampleState {
  constructor() {
  }

  @Selector()
  static students(state: NgxsExampleStateModel): StudentModel[] {
    return state.students;
  }

  @Selector()
  static departments(state: NgxsExampleStateModel): DepartmentModel[] {
    return state.departments;
  }

  @Action(AddStudent)
  addStudent({patchState, getState}: StateContext<NgxsExampleStateModel>,
                           {payload}: AddStudent): void {
    payload.id = setGuid();
    patchState({students: [...getState().students, payload], departments: [...getState().departments]});
  }

  @Action(RemoveStudent)
  removeStudent({patchState, getState}: StateContext<NgxsExampleStateModel>,
             {payload}: RemoveStudent): void {
    patchState({students: getState().students.filter(student => student.id !== payload), departments: [...getState().departments]});
  }

}
