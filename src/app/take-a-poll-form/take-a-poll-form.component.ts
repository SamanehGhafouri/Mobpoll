import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServiceService} from "../service.service";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-take-a-poll-form',
  templateUrl: './take-a-poll-form.component.html',
  styleUrls: ['./take-a-poll-form.component.css']
})
export class TakeAPollFormComponent implements OnInit {
  pollId : string;
  pollQuestion : string;
  pollOptions: [];
  optionForm: FormGroup;
  optionId: any[]
  optionNames: any[]
  optionTally: any
  optionselectedCount: number;




  constructor(private route: ActivatedRoute, private service: ServiceService, private fb:FormBuilder) {
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

          console.log("give me the name and its id?", option["optionName"], option["optionId"])

          option_names.push(option["optionName"])
          this.optionNames = option_names

          option_ids.push(option["optionId"])
          this.optionId = option_ids

          option_tallies.push(option["tally"])
          this.optionTally = option_tallies

        }
        console.log("show me the array of option names? ", this.optionId ,this.optionNames, this.optionTally)
      })
    })

  }

  selectedOption(name: any, isChecked: boolean){
    let count = 0
    this.pollOptions.forEach(function (optionName, tally) {
      name = optionName["tally"]
      if (isChecked){
        optionName["tally"] ++;
        console.log("show me the updated tally ", optionName["tally"])

      }
    })
  }


  ngOnInit(): void {

    this.optionForm = this.fb.group({
      name: this.fb.array([])
    })
  }

  submitVote(){

    console.log("the vote is submitted");
    // console.warn("The Vote is Submitted");

  }

}
