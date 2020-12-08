import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CreatePollSubmitWarningComponent} from "../create-poll-submit-warning/create-poll-submit-warning.component";

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

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
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
    // TODO: direct the valid form to the created form page and show details
    if (this.mainForm.valid){
      alert("form is created");
    }
    else {
      const modalRef = this.modalService.open(CreatePollSubmitWarningComponent);
      modalRef.componentInstance.name = 'World';

      this.validateFormGroupField(this.mainForm);
      this.validateFormArrayFields(this.options);

    }

  }
  //Validating FormGroup Fields (question)
  validateFormGroupField(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(field => {
      const  control = formGroup.get(field);
      if (control instanceof FormControl){
        control.markAsTouched({onlySelf: true});
      }
      else if (control instanceof FormGroup) {
        this.validateFormGroupField(control);
      }
    })
  }

  //Validating FormArray Fields (options)
  validateFormArrayFields(formGroup: FormArray) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormArray) {
        this.validateFormArrayFields(control);
      }
    })
  }


}
