import {setGuid} from "../../guid.util";

export interface StudentModel {
  id: string
  name: string
  course: string
  averageMark: number
}

export function setDefaultStudent() {
  return {id: setGuid(), name: 'Ivan', course: 'Philosophy', averageMark: 5}
}
