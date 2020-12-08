import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

// Custom validation for poll question that needs to be at least 2 words
function validateSize(form: FormControl) {
  let poll_option_input = form.value;
  poll_option_input = poll_option_input.trim(); // removes spaces from left and right of string
  poll_option_input = poll_option_input.replace(/\s\s+/g, ' '); // removes extra spaces in between words
  let option_input_words = poll_option_input.split(" "); // creates an array of words from string

  console.log("Option Input Words", option_input_words)
  console.log("Validate Size Input Value", form.value, option_input_words.length)

  return option_input_words.length < 2 ? {
    invalidSize: true
  } : null;
}

@Component({
  selector: 'app-create-poll-form',
  templateUrl: './create-poll-form.component.html',
  styleUrls: ['./create-poll-form.component.css']
})
export class CreatePollFormComponent implements OnInit {
  mainForm: FormGroup;

  constructor() {
    this.mainForm = new FormGroup({
      enterPollQuestion : new FormControl('', [validateSize]),
      options: new FormArray([
        new FormControl('', [Validators.required]),
        new FormControl('', [Validators.required]),
        new FormControl(''),
        new FormControl(''),
        new FormControl('')
        ])

    });
  }

  get options(){
    return this.mainForm.get('options') as FormArray;
  }

  get question(){
    return this.mainForm.get('enterPollQuestion');
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
