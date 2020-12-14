import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-polls-help',
  templateUrl: './public-polls-help.component.html',
  styleUrls: ['./public-polls-help.component.css']
})
export class PublicPollsHelpComponent implements OnInit {
  publicPollHelp = 'Voting In A Public Poll';

  constructor() { }

  ngOnInit(): void {
  }

}
