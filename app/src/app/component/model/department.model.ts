import {setGuid} from "../../guid.util";

export interface DepartmentModel {
  name: string;
  id: string;
}
export function setDefaultDepartment() {
  return { name: 'Tech', id: setGuid()  }
}
