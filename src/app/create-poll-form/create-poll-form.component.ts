import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-poll-form',
  templateUrl: './create-poll-form.component.html',
  styleUrls: ['./create-poll-form.component.css']
})
export class CreatePollFormComponent implements OnInit {

  createPollForm = new FormGroup({
    enterPollQuestion: new FormControl(''),
    optionOne: new FormControl(''),
    optionTwo: new FormControl(''),
    optionThree: new FormControl(''),
    optionFour: new FormControl(''),
    optionFive: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

}
