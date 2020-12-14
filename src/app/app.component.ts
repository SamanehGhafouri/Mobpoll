import {Component} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {CreatePollHelpComponent} from "./create-poll-help/create-poll-help.component";
import {AboutHelpComponent} from "./about-help/about-help.component";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mobpoll-in-Angular';


  constructor(private modalService: NgbModal, public router: Router) {
  }

  helpCom() {
    if (this.router.url == '/') {
      const modalRef = this.modalService.open(CreatePollHelpComponent);

    } else if (this.router.url == '/about') {
      const modalRefAbout = this.modalService.open(AboutHelpComponent);
    }
    else {
      console.log("this is a different page");
    }
  }
}
