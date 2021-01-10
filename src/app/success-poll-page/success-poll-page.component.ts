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
  constructor(private route: ActivatedRoute, private service:ServiceService, private firestore:AngularFirestore) {

    route.params.subscribe(pollId => {

      this.pollId = pollId['pollId'];

      this.firestore.collection('polls').doc(this.pollId).get().subscribe(document => {
        const poll = document.data()
        console.log("#### SUBSCRIBED RESULTS ####", poll['enterPollQuestion'], poll['options']);

        this.pollQuestion = poll['enterPollQuestion'];
      });

    });

  }

  ngOnInit() {

  }

}
