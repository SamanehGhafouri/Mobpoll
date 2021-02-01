import {Component, OnInit} from '@angular/core';
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

  constructor(private route: ActivatedRoute, private service: ServiceService,) {
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

  getCustomColor(optionId) {
    let colorDict = {
      'blue': 'rgb(65, 167, 251)',
      'green': 'rgb(127, 201, 28)',
      'orange': 'rgb(253, 150, 0)',
      'red': 'rgb(252, 44, 27)',
      'gray': 'rgb(190, 204, 212)'
    };
    let arr = [colorDict['blue'], colorDict['green'], colorDict['gray'], colorDict['orange'], colorDict['red']];
    let target = optionId % arr.length;
    return arr[target];
  }

  ngOnInit(): void {}
}
