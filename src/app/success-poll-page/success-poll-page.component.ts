import { Component, OnInit } from '@angular/core';
import {CreatePollComponent} from "../create-poll/create-poll.component";
import {CreatePollFormComponent} from "../create-poll-form/create-poll-form.component";
import {ServiceService} from "../service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-success-poll-page',
  templateUrl: './success-poll-page.component.html',
  styleUrls: ['./success-poll-page.component.css']
})
export class SuccessPollPageComponent implements OnInit {
  pollId: string;
  successPollPage = 'success!';
  constructor(private route: ActivatedRoute) {
    route.params.subscribe(whatChanged => {
      this.pollId = whatChanged['pollId'];
    });
  }

  ngOnInit(): void {

  }



}
