import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServiceService} from "../service.service";

@Component({
  selector: 'app-take-a-poll-form',
  templateUrl: './take-a-poll-form.component.html',
  styleUrls: ['./take-a-poll-form.component.css']
})
export class TakeAPollFormComponent implements OnInit {
  pollId : string;
  pollQuestion : string;
  pollOptions: [];

  constructor(private route: ActivatedRoute, private service: ServiceService) {
    //Get poll Id from url
    route.params.subscribe(pollId =>{
      this.pollId = pollId['pollId']
      console.log("is that getting the poll Id ----> ", this.pollId)

      // using Poll Id from url to get data from database
      this.service.getPollById(this.pollId).subscribe(document => {
        const poll = document.data()
        this.pollQuestion = poll['pollQuestion']
        this.pollOptions = poll['options']
        console.log("what is the poll question? --->  ", this.pollQuestion)
        console.log("what are the options? ----> ", this.pollOptions)
      })

    })
  }

  ngOnInit(): void {
  }

}
