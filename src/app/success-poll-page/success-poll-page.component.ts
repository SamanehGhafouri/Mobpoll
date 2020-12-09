import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-poll-page',
  templateUrl: './success-poll-page.component.html',
  styleUrls: ['./success-poll-page.component.css']
})
export class SuccessPollPageComponent implements OnInit {
  successPollPage = 'success!';
  constructor() { }

  ngOnInit(): void {
  }

}
