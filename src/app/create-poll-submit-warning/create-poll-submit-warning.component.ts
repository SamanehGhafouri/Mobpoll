import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-create-poll-submit-warning',
  templateUrl: './create-poll-submit-warning.component.html',
  styleUrls: ['./create-poll-submit-warning.component.css']
})
export class CreatePollSubmitWarningComponent implements OnInit {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
