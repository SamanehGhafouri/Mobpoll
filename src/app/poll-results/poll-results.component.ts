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
  optionId: any[]
  optionNames: any[]
  optionTally: any

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

        // This is getting info from options in our database such as optionName, optionId, tally
        let option_names = []
        let option_ids = []
        let option_tallies = []

        for (let option of this.pollOptions) {

          option_names.push(option["optionName"])
          this.optionNames = option_names

          option_ids.push(option["optionId"])
          this.optionId = option_ids

          option_tallies.push(option["tally"])
          this.optionTally = option_tallies
        }
      })
    });
  }

  ngOnInit(): void {
  }

}
