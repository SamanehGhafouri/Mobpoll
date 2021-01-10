import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-success-poll-page',
  templateUrl: './success-poll-page.component.html',
  styleUrls: ['./success-poll-page.component.css']
})
export class SuccessPollPageComponent implements OnInit {
  pollId: string;
  pollQuestion: string;
  successPollPage = 'success!';
  constructor(private route: ActivatedRoute, private service:ServiceService) {

    // Getting pollId from the URL
    route.params.subscribe(pollId => {
      this.pollId = pollId['pollId'];

      // Getting poll using Id
      this.service.getPollById(this.pollId).subscribe(document => {
        const poll = document.data();
        // retrieve poll question from this
        this.pollQuestion = poll['pollQuestion'];
      })

    });

  }
  ngOnInit() {

  }

}
