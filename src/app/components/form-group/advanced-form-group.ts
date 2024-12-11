//  Advanced Form

import { FormControl, FormGroup } from '@angular/forms';
import { SkillFormGroupModel, SkillsFormGroup, SkillsFormGroup2, ToFormControl } from './form-group';

interface MainFormGroupModel {
  firstName: string;
  skills: SkillFormGroupModel;
  skills2: SkillFormGroupModel;
 }
 
 
 type MainFormGroupModelControlTypes = 
 ToFormControl<Omit<MainFormGroupModel, 'skills' | 'skills2'>> &
 {
  skills: SkillsFormGroup
  skills2: SkillsFormGroup2
 }
 
 
 export class AdvancedFormGroup extends FormGroup<MainFormGroupModelControlTypes>{
  constructor(){
    super({
      firstName: new FormControl(),
      skills: new SkillsFormGroup(),
      skills2: new SkillsFormGroup2(),
    });
  }
 }
 //  Advanced Form
 