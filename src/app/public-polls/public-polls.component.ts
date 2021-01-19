import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../service.service";
import {Observable} from "rxjs";
import {pathToFileURL} from "url";


@Component({
  selector: 'app-public-polls',
  templateUrl: './public-polls.component.html',
  styleUrls: ['./public-polls.component.css']
})
export class PublicPollsComponent implements OnInit {
  publicPollsMessage = "Participate in a public poll";
  questionArray$: Observable<any[]>;
  pollId: any;
  poll : any


  constructor(private service: ServiceService) {

    this.questionArray$ = this.service.getPolls();

    // Using Observable with callback
    // const public_poll_component = this; // Capture memory reference to this component
    // this.pollsObservable = this.service.getPollsByQuestion();
    // this.pollsObservable.subscribe(function (querySnapshot){
    //   public_poll_component.questionArray = []
    //   querySnapshot.forEach(function (doc){
    //     console.log("What is doc?", doc.pollQuestion);
    //     public_poll_component.questionArray.push(doc);
    //   })
    // })
  }

  ngOnInit(){


  }

}
