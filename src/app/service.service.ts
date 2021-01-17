import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";

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

  getPolls(){
    return this.firebase.collection("polls").valueChanges();
  }



}
