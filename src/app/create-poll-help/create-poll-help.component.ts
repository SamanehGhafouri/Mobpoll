import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-poll-help',
  templateUrl: './create-poll-help.component.html',
  styleUrls: ['./create-poll-help.component.css']
})
export class CreatePollHelpComponent implements OnInit {
  createPollHelp = 'Create A Poll';

  constructor() { }

  ngOnInit(): void {
  }

}
