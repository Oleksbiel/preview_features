// helpers

import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToFormControl } from './form-group';





export interface SkillFormArrayModel {
  name: string;
  level: number;
}

export class ProjectLineItemFormGroup extends FormGroup<ToFormControl<SkillFormArrayModel>>{
  constructor(){
    super({
      name: new FormControl(null, Validators.required),
      level: new FormControl(25, [Validators.required, Validators.max(25)]),
    });
  }
 }


export class ProjectsFormArray extends FormArray<ProjectLineItemFormGroup> {
  constructor() {
    super([]);
  }

  addNewItem(skill: SkillFormArrayModel): void {
    const skillFormGroup = new ProjectLineItemFormGroup();


    skillFormGroup.reset(skill);

    this.push(skillFormGroup);
  }

  removeSkill(index: number): void {
    this.removeAt(index);
  }
}