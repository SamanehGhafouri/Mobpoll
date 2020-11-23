import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contatiner',
  templateUrl: './contatiner.component.html',
  styleUrls: ['./contatiner.component.css']
})
export class ContatinerComponent implements OnInit {
  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
  }

}
