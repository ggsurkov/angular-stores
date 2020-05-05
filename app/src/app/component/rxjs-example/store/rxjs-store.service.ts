import {Injectable} from '@angular/core';
import {setDefaultStudent, StudentModel} from "../../model/student.model";
import {RxjsStatesModel, RxjsStoreDataModel, RxjsStoreModel, setRxJsStates, setRxJsStore} from "./rxjs-store.model";
import {setGuid} from "../../../guid.util";

enum RxJsStates {
  students = 'students$',
  departments = 'departments$'
}

@Injectable({
  providedIn: 'root'
})
export class RxjsStoreService {
  private readonly store: RxjsStoreModel;
  public states: RxjsStatesModel;

  constructor() {
    this.store = setRxJsStore();
    this.states = setRxJsStates();
    this.initStates();
    this.fetchAll();
  }

  private initStates() {
    for (let [key, value] of Object.entries(this.store)) {
      this.states[RxJsStates[key]] = value.asObservable();
    }
  }


  private get getStore(): RxjsStoreDataModel {
    return {students: this.store.students.getValue(), departments: this.store.departments.getValue()}
  }

  private set setStore(data: RxjsStoreDataModel) {
    for (let [key, value] of Object.entries(data)) {
      this.store[key].next(value)
    }
  }

  async addStudent(newStudent: StudentModel): Promise<any> {
    if (newStudent) {
      newStudent.id = setGuid();
      this.setStore = {students: [...this.getStore.students, newStudent], departments: [...this.getStore.departments]};
      return this.getStore;
    }
  }

  async removeStudent(id: string): Promise<any> {
    const deletedStudent = this.getStore.students.find(t => t.id === id);
    if (deletedStudent) this.setStore = {
      students: this.getStore.students.filter(student => student.id !== id),
      departments: [...this.getStore.departments]
    };
    return this.getStore;
  }

  async fetchAll() {
    this.setStore = {students: [setDefaultStudent(), setDefaultStudent()], departments: []};
    console.log('fetchAll success! ', this.getStore);
  }
}
