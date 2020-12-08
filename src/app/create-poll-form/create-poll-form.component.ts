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

    })
  }

  addOption(){
    if (this.mainForm.value.options.length < 14) {

      this.mainForm.value.options.push(new FormControl(''));
    }
  }

  createPoll(){

  }
  ngOnInit(): void {
  }

}
