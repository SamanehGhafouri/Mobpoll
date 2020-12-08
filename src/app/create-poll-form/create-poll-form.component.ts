import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-poll-form',
  templateUrl: './create-poll-form.component.html',
  styleUrls: ['./create-poll-form.component.css']
})
export class CreatePollFormComponent implements OnInit {
  mainForm: FormGroup;

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

    });
  }

  get options(){
    return this.mainForm.get('options') as FormArray;
  }

  addOption(){
    if (this.options.length < 15) {
      this.options.push(new FormControl(''));
    }
  }

  createPoll(){

  }
  ngOnInit(): void {
  }

}
