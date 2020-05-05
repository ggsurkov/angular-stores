import {EventEmitter, Injectable} from '@angular/core';
import {StudentModel} from "../../model/student.model";
import {setGuid} from "../../../guid.util";

export interface ObserverDataModel {
  action: string
  student: StudentModel;
  students: StudentModel[];
}

@Injectable({
  providedIn: 'root'
})
export class ObserverProvider {
  public readonly actions = {
    remove: 'remove',
    add: 'add',
  }
  public subscribers: EventEmitter<any>[] = [];

  constructor() {
  }

  addSubscriber(subscriber: EventEmitter<any>): void {
    this.subscribers.push(subscriber);
  }

  removeSubscriber(subscriber: EventEmitter<any>): void {
    this.subscribers.splice(this.subscribers.indexOf(subscriber), 1);
  }

  publishStudent(data: { student: StudentModel, action: string, students: StudentModel[] }) {
    this.subscribers.forEach((subscriber) => {
      subscriber.emit(data);
      console.log('Publish success! ', data);
    })
  }

  updateData(data: { student: StudentModel, action: string, students: StudentModel[] }): StudentModel[] {
    let resolve: StudentModel[];
    if (data.action === this.actions.add) {
      data.student.id = setGuid();
      resolve = [...data.students, data.student];
    }
    if (data.action === this.actions.remove) {
      resolve = data.students.filter((student: StudentModel) => student.id !== data.student.id);
    }
    console.log('Update Data success! ', resolve);
    return resolve;
  }

}
