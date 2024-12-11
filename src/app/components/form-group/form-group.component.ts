import { Component, OnInit } from '@angular/core';
import {  SkillFormGroupModel, SkillsFormGroup, ToFormControl } from './form-group';
import { CoreModule } from '@web/core';
import { BaseListMethods } from '@web/core/models';
import { AdvancedFormGroup } from './advanced-form-group';
import { FormControl, FormGroup } from '@angular/forms';
import { ProjectsFormArray } from './form-array';

@Component({
  standalone: true,
  imports: [CoreModule],
  selector: 'form-group-example',
  templateUrl: './form-group.component.html'
})

export class FormGroupPreviewComponent implements OnInit, BaseListMethods<SkillFormGroupModel> {


  testVal: string;


  smallListFormGroup = new FormGroup<ToFormControl<SkillFormGroupModel>>({
    test1: new FormControl(),
    test2: new FormControl(),
  });


  testFormArray = new ProjectsFormArray();


  formGroup = new SkillsFormGroup();


  advancedFormGroup = new AdvancedFormGroup();
  constructor() { 

    this.smallListFormGroup.controls.test1.value;
    this.smallListFormGroup.controls.test2.value;

    this.formGroup.controls.test1.reset(25);


    this.formGroup.addSomeCustomValidators();
    this.formGroup.removeSomeCustomValidators();
    
    this.formGroup.controls.test2.valueChanges.subscribe(responseVal => {


      if(typeof responseVal === 'string'){

      } else {
        
      }
    });


    this.advancedFormGroup.controls.skills2.controls.test3.reset(25);
    this.advancedFormGroup.controls.skills2.controls.test4.valueChanges.subscribe(response => {

    })

  }
  onFetchData(): void {

  }
  onPrepareRequest(): SkillFormGroupModel {
    return this.formGroup.getRawValue();
  }
  

  ngOnInit() { 

    this.testFormArray.addNewItem({
      name: 'test',
      level: 25,
    });
    // debugger;
  }
}