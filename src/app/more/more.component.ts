import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['../about/about.component.css']
})
export class MoreComponent implements OnInit {
  moreMessage="Learn More";
  constructor() {

  }

  ngOnInit(): void {
  }

}
