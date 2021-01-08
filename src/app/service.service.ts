import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import firebase from "firebase";
import Item = firebase.analytics.Item;
import {animate} from "@angular/animations";
import {Poll} from "./poll/poll";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private firebase: AngularFirestore,) {
  }

  addPollToFirebase(item, callback: (poll) => void ){
    this.firebase.collection("polls").add(item).then(pollDocument => {
      callback(pollDocument)
    })
  }


}
