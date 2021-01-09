import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import firebase from "firebase";
import Item = firebase.analytics.Item;
import {animate} from "@angular/animations";
import {Poll} from "./poll/poll";
import {CreatePollFormComponent} from "./create-poll-form/create-poll-form.component";
import {redirectUnauthorizedTo} from "@angular/fire/auth-guard";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private firebase: AngularFirestore, ) {

  }

  addPollToFirebase(item, callback: (poll) => void ){
    this.firebase.collection("polls").add(item).then(pollDocument => {
      callback(pollDocument)
    })
  }

  getQuestion(){
    // this.firebase.collection("polls").get().then()
  }




}
