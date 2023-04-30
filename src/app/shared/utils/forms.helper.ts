import {FormGroup} from "@angular/forms";

export const getControl = (form: FormGroup<any>, controlName: string): any=>{
  return form.get(controlName)
}
