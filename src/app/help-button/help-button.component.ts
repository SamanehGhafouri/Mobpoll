import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CreatePollHelpComponent} from "../create-poll-help/create-poll-help.component";
import {AboutHelpComponent} from "../about-help/about-help.component";
import {LearnMoreHelpComponent} from "../learn-more-help/learn-more-help.component";
import {PublicPollsHelpComponent} from "../public-polls-help/public-polls-help.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";

@Component({
  selector: 'app-help-button',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './help-button.component.html',
  styleUrls: ['./help-button.component.css'],
  styles:[`
    .mobpoll-help-modal .modal-content{
      border-color: red;
      border-radius: 20px;
    }
    .mobpoll-helpss-modal .modal-content{
      border-color: #FF9E13;
    }
  `]
})
export class HelpButtonComponent implements OnInit {

  constructor(private modalService: NgbModal, public router: Router) { }
  helpCom() {
    if (this.router.url == '/') {
      const modalRef = this.modalService.open(CreatePollHelpComponent, {scrollable: true, windowClass:'mobpoll-help-modal'});

    } else if (this.router.url == '/about') {
      const modalRefAbout = this.modalService.open(AboutHelpComponent, {scrollable: true, windowClass:'mobpoll-helpss-modal'});
    }
    else if (this.router.url == '/learn_more') {
      const modalRefLearnMore = this.modalService.open(LearnMoreHelpComponent, {scrollable: true});
    }
    else if (this.router.url == '/public_polls'){
      const modalRefLearnMore = this.modalService.open(PublicPollsHelpComponent, {scrollable: true});
    }
  }

  ngOnInit(): void {
  }

}
