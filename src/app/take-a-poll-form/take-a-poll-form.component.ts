import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServiceService} from "../service.service";
import {Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-take-a-poll-form',
  templateUrl: './take-a-poll-form.component.html',
  styleUrls: ['./take-a-poll-form.component.css']
})
export class TakeAPollFormComponent implements OnInit {
  pollId: string;
  pollQuestion: string;
  pollOptions: [];
  optionForm: FormGroup;
  optionId: any[]
  optionNames: any[]
  optionTally: any


  constructor(private route: ActivatedRoute, private service: ServiceService, private formBuilder: FormBuilder) {
    //Get poll Id from url
    route.params.subscribe(pollId => {
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

        for (let option of this.pollOptions) {

          console.log("give me the name and its id?", option["optionName"], option["optionId"])

          option_names.push(option["optionName"])
          this.optionNames = option_names

          option_ids.push(option["optionId"])
          this.optionId = option_ids

          option_tallies.push(option["tally"])
          this.optionTally = option_tallies
        }
        console.log("show me the array of option names? ", this.optionId, this.optionNames, this.optionTally)
      })
    });

    //Form Builder
    this.optionForm = this.formBuilder.group({
      options: this.formBuilder.array([])
    })
  }
  onCheckboxChange(e){
    const options: FormArray = this.optionForm.get('options') as FormArray;
    if (e.target.checked){
      options.push(new FormControl(e.target.value));
    } else {
      const index = options.controls.findIndex(x => x.value === e.target.value);
      options.removeAt(index);
    }
  }

  ngOnInit(): void {

  }

  submitVote() {
    console.log("the new_option form has: ", this.optionForm.value.options)
  }

}
