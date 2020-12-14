import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-help',
  templateUrl: './about-help.component.html',
  styleUrls: ['./about-help.component.css']
})
export class AboutHelpComponent implements OnInit {
  aboutHelp = 'About';

  constructor() { }

  ngOnInit(): void {
  }

}
