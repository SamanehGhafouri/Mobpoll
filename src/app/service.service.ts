import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import firebase from "firebase";
import Item = firebase.analytics.Item;
import {animate} from "@angular/animations";
import {Poll} from "./poll/poll";
import {CreatePollFormComponent} from "./create-poll-form/create-poll-form.component";
import {redirectUnauthorizedTo} from "@angular/fire/auth-guard";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


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

  getQuestions(){

  }
  getPolls(){
    return this.firebase.collection("polls").valueChanges()
  }



}
