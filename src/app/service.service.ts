import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {map} from "rxjs/operators";
import {FormControl} from "@angular/forms";
import firebase from "firebase";





@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private firebase: AngularFirestore) {
  }

  // Form Validation For create poll form
  // Custom validation for poll question that needs to be at least 2 words
  ValidateQuestion(form: FormControl) {
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

  // Add poll
  addPoll(poll_form, callback: (poll) => void) {
    poll_form = this.removeEmptyOptionsFromForm(poll_form);
    poll_form["pollIsPrivate"] = 1
    poll_form["totalVotes"] = 0

    // Each options has a set of id, name, and tally
    const options = []
    poll_form["options"].forEach(function (option, index) {
      option = {
        optionId: index,
        optionName: option,
        tally: 0
      }
      options.push(option);
    })
    poll_form["options"] = options;
    this.firebase.collection("polls").add(poll_form).then(pollDocument => {
      callback(pollDocument)
    })
  }

  // Update the tally if its clicked by 1
  updateTally(pollId, pollOptions, optionsChecked) {

    for (let checked of optionsChecked) {
      console.log("Before", pollOptions[checked]);
      pollOptions[checked].tally++;
      console.log("After", pollOptions[checked]);
    }
    this.firebase.collection('polls').doc(pollId).update({options: pollOptions});
  }

  // Atomic update totalVotes
  updateAtomicTotalVotes(pollId){
    let pollDocumentRef = firebase.firestore().collection('polls').doc(pollId);
    return firebase.firestore().runTransaction(function (transaction) {
      return transaction.get(pollDocumentRef).then(function (pollDoc)
      {
        if (!pollDoc.exists){
          throw 'not exist';
        }
        let totalVotes = pollDoc.data().totalVotes + 1;
        transaction.update(pollDocumentRef, {totalVotes: totalVotes});
      });
    }).then(function () {
      console.log("transaction successfully committed!" );

    }).catch(function (error) {
      console.log("transaction failed", error);
    })
  }

  // String Helpers
  removeSpacesFromString(input: string): string {
    input = input.trim(); // removes spaces from left and right of string
    input = input.replace(/\s\s+/g, ' '); // removes extra spaces in between words
    return input
  }

  // Form Helpers
  removeEmptyOptionsFromForm(form) {
    let options = form.options;
    let _options = [];
    for (let option of options) {
      option = this.removeSpacesFromString(option);
      if (option.length > 0) {
        _options.push(option)
      }
    }
    form.options = _options;
    return form;
  }

  getPollById(pollId) {
    return this.firebase.collection("polls").doc(pollId).get();
  }

  getPolls() {
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
