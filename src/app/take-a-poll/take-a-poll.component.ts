import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-take-a-poll',
  templateUrl: './take-a-poll.component.html',
  styleUrls: ['./take-a-poll.component.css']
})
export class TakeAPollComponent implements OnInit {
  takeAPollMessage = "Take A Poll!"

  constructor() { }

  ngOnInit(): void {
  }

}
