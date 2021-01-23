import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServiceService} from "../service.service";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {animate} from "@angular/animations";

@Component({
  selector: 'app-take-a-poll-form',
  templateUrl: './take-a-poll-form.component.html',
  styleUrls: ['./take-a-poll-form.component.css']
})
export class TakeAPollFormComponent implements OnInit {
  pollId : string;
  pollQuestion : string;
  pollOptions: [];
  mainForm: FormGroup;
  optionId: any[]
  optionName: any[]
  optionTally: any

  constructor(private route: ActivatedRoute, private service: ServiceService) {
    //Get poll Id from url
    route.params.subscribe(pollId =>{
      this.pollId = pollId['pollId']
      console.log("is that getting the poll Id ----> ", this.pollId)

      // using Poll Id from url to get data from database
      this.service.getPollById(this.pollId).subscribe(document => {
        const poll = document.data()
        this.pollQuestion = poll['pollQuestion']
        this.pollOptions = poll['options']
        console.log("what is the poll question? --->  ", this.pollQuestion)

        // This is getting info from options in our database such as optionName, optionId, tally
        let option_names = []
        let option_ids = []
        let option_tallies = []

        for(let option of this.pollOptions){
          console.log("I wanna see this? " ,option["optionName"])
          option_names.push(option["optionName"])
          this.optionName = option_names

          option_ids.push(option["optionId"])
          this.optionId = option_ids

          option_tallies.push(option["tally"])
          this.optionTally = option_tallies
        }
        console.log("show me the array of option names? ", this.optionId ,this.optionName, this.optionTally)



      })

    })

  }

  ngOnInit(): void {

    // let options = this.pollOptions;
    // this.mainForm = new FormGroup({
    //   this.options: new FormArray([
    //     new FormControl(''),
    //     new FormControl(''),
    //     new FormControl(''),
    //     new FormControl(''),
    //     new FormControl('')
    //   ])
    //
    // });
  }

}
