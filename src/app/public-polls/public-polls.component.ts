import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-public-polls',
  templateUrl: './public-polls.component.html',
  styleUrls: ['./public-polls.component.css']
})
export class PublicPollsComponent implements OnInit {
  publicPollsMessage = "Participate in a public poll";

  constructor() {
  }

  ngOnInit(): void {
  }

}
