import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-take-a-poll',
  templateUrl: './take-a-poll.component.html',
  styleUrls: ['./take-a-poll.component.css']
})
export class TakeAPollComponent implements OnInit {
  takeAPollMessage: string;

  // if poll taken = true ---> show Poll Results! page (poll is taken)
  // if poll taken = false ---> show Take A Poll! page (poll is not taken)
  taken = true;

  constructor() { }

  ngOnInit(): void {
    if (this.taken === false){
      this.takeAPollMessage = "Take A Poll!"
    }
    if (this.taken === true){
      this.takeAPollMessage = "Poll Results!"
    }

  }

}
