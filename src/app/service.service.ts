import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {map} from "rxjs/operators";
import {FormControl} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // Form Validation For create poll form
  // Custom validation for poll question that needs to be at least 2 words
  ValidateSize(form: FormControl) {
    let poll_option_input = form.value;
    poll_option_input = poll_option_input.trim(); // removes spaces from left and right of string
    poll_option_input = poll_option_input.replace(/\s\s+/g, ' '); // removes extra spaces in between words
    let option_input_words = poll_option_input.split(" "); // creates an array of words from string

    console.log("Option Input Words", option_input_words)
    console.log("Validate Size Input Value", form.value, option_input_words.length)

    return option_input_words.length < 2 ? {
      invalidSize: true
    } : null;
  }
  ValidateOptions(form: FormControl) {
    let poll_option_input = form.value;
    poll_option_input = poll_option_input.trim(); // removes spaces from left and right of string

    return poll_option_input.length < 1 ? {
      invalidSize: true
    } : null;
  }

  constructor(private firebase: AngularFirestore) {

  }

  addPoll(poll, callback: (poll) => void ){
    poll["pollIsPrivate"] = 1
      this.firebase.collection("polls").add(poll).then(pollDocument => {
        callback(pollDocument)
      })


  }

  getPollById(pollId){
    return this.firebase.collection("polls").doc(pollId).get();
  }

  getPolls(){

    // For simple stuff use valueChanges() like you need just data in subcollection
    // return this.firebase.collection("polls").valueChanges();

    // For more complex: like need data and also the id that generated use snapshotChanges
    // source: https://github.com/angular/angularfire/blob/master/docs/firestore/collections.md#snapshotchanges
    return this.firebase.collection('polls').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        data['id'] = a.payload.doc.id;
        return data;
      }))
    )
  }
}
