import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-more-help',
  templateUrl: './learn-more-help.component.html',
  styleUrls: ['./learn-more-help.component.css']
})
export class LearnMoreHelpComponent implements OnInit {
  learnMoreHelp = 'Learn More';

  constructor() { }

  ngOnInit(): void {
  }

}
