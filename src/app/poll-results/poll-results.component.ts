import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-poll-results',
  templateUrl: './poll-results.component.html',
  styleUrls: ['./poll-results.component.css']
})
export class PollResultsComponent implements OnInit {
  pollId: string;
  pollQuestion: string;
  pollOptions: [];
  totalVotes: number;


  constructor(private route: ActivatedRoute, private service: ServiceService, ) {
    //Get poll Id from url
    route.params.subscribe(pollId => {
      this.pollId = pollId['pollId']
      console.log("is that getting the poll Id ----> ", this.pollId)

      // using Poll Id from url to get data from database
      this.service.getPollById(this.pollId).subscribe(document => {
        const poll = document.data()
        this.pollQuestion = poll['pollQuestion']
        this.pollOptions = poll['options']
        this.totalVotes = poll['totalVotes']
      })
    });
  }

  ngOnInit(): void {
  }

}
