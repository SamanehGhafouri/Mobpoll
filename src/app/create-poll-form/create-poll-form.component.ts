import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-poll-form',
  templateUrl: './create-poll-form.component.html',
  styleUrls: ['./create-poll-form.component.css']
})
export class CreatePollFormComponent implements OnInit {
  mainForm: FormGroup;

  createPollForm = new FormGroup({
    enterPollQuestion: new FormControl(''),
    optionOne: new FormControl(''),
    optionTwo: new FormControl(''),
    optionThree: new FormControl(''),
    optionFour: new FormControl(''),
    optionFive: new FormControl(''),

  })

  constructor() {
    this.mainForm = new FormGroup({
      enterPollQuestion : new FormControl(''),
      options: new FormArray([
        new FormControl(''),
        new FormControl(''),
        new FormControl(''),
        new FormControl(''),
        new FormControl('')
        ])

    })
  }

  addOption(){
    if (this.mainForm.value.options.length < 14) {

      this.mainForm.value.options.push(new FormControl(''));
    }
  }

  ngOnInit(): void {
  }

}
