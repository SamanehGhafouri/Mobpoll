import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css'],

})
export class HelpComponent implements OnInit {
  @Input() helpName: string;

  constructor(public activeModal: NgbActiveModal) { }


  ngOnInit(): void {
  }

}
