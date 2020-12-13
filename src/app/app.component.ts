import { Component } from '@angular/core';
import {CreatePollSubmitWarningComponent} from "./create-poll-submit-warning/create-poll-submit-warning.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HelpComponent} from "./help/help.component";
import {Route, Router} from "@angular/router";
import {CreatePollHelpComponent} from "./create-poll-help/create-poll-help.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mobpoll-in-Angular';
  constructor(private modalService: NgbModal, public router: Router) {
  }
  helpCom(){
    if (this.router.navigate(['/'])){
      const modalRef = this.modalService.open(CreatePollHelpComponent);
    }

  }
}
