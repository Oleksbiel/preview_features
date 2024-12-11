import { FormControl, FormGroup, Validators } from '@angular/forms';

//  helpers
export type ToFormControl<T> = {
  [K in keyof T]: FormControl<T[K]>;
 };
 
 export type ToFormGroup<T> = FormGroup<ToFormControl<T>>; 
//  helpers

 

// SmallForm
 export interface SkillFormGroupModel {
  test1: number;
  test2: number;
 }
 
 
 export class SkillsFormGroup extends FormGroup<ToFormControl<SkillFormGroupModel>>{
  constructor(){
    super({
      test1: new FormControl(null, Validators.required),
      test2: new FormControl(25, [Validators.required, Validators.max(25)]),
    });
  }

  addSomeCustomValidators(){
    this.controls.test1.setValidators([Validators.required])
  }
  removeSomeCustomValidators(){
    this.controls.test1.setValidators([])
  }
 }
 
 // SmallForm


// SmallForm2
 interface SkillFormGroupModel2 {
  test3: number;
  test4: number;
 }
 
 
 export class SkillsFormGroup2 extends FormGroup<ToFormControl<SkillFormGroupModel2>>{
  constructor(){
    super({
      test3: new FormControl(),
      test4: new FormControl(),
    });
  }
 }
 
 // SmallForm2



