import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CreatePollSubmitWarningComponent} from "../create-poll-submit-warning/create-poll-submit-warning.component";
import {Router} from "@angular/router";
import {ServiceService} from "../service.service";
import * as empty from "firebase/empty-import";
import {not} from "rxjs/internal-compatibility";

@Component({
  selector: 'app-create-poll-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './create-poll-form.component.html',
  styleUrls: ['./create-poll-form.component.css'],
  styles: [`
    .mobpoll-modal .modal-content {
      border-radius: 20px;
      letter-spacing: 1px;
      height: auto;
      width: 375px;
      z-index: 450;
      background-color: #3e4b5d;
      border: 2px solid #6f7886;

    }

  `]
})
export class CreatePollFormComponent implements OnInit {
  mainForm: FormGroup;

  constructor(private modalService: NgbModal, public router: Router, private service:ServiceService)
  {}

  ngOnInit(): void {
    this.mainForm = new FormGroup({
      pollQuestion : new FormControl('', [this.service.ValidateQuestion]),
      options: new FormArray([
        new FormControl('', [Validators.required, this.service.ValidateOptions]),
        new FormControl('', [Validators.required, this.service.ValidateOptions]),
        new FormControl('', ),
        new FormControl('', ),
        new FormControl('', )
      ])

    });
  }

  get options(){
    return this.mainForm.get('options') as FormArray;
  }

  get question(){
    return this.mainForm.get('pollQuestion');
  }

  addOption(){
    if (this.options.length < 15) {
      this.options.push(new FormControl(''));
    }
  }

  createPoll(){
    if (this.mainForm.valid) {

      // console.log("MY FORM VALUES", this.mainForm.value);
      // let options = this.mainForm.value.options;
      // let _options = [];
      // for (let option of options) {
      //   console.log(option, option.length);
      //   if (option.length > 0) {
      //     _options.push(option)
      //   }
      // }
      // this.mainForm.value.options = _options;
      //
      // console.log("Modified Form", this.mainForm.value);

      // this.service.add(this.mainForm.value);
      // this.firestore.collection("poll").add(this.mainForm.value);
      // this.router.navigate(['/success']);


        this.service.addPoll(this.mainForm.value, poll => {
          console.log("Inside the Create Poll Component. Poll ID=", poll.id);
          this.router.navigate(['/success/' + poll.id]);
        });

      }

    else {
      this.modalService.open(CreatePollSubmitWarningComponent, {centered: true, scrollable: true, windowClass: 'mobpoll-modal'});
      // modalRef.componentInstance.name = 'World';

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
