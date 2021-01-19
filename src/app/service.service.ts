import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {map} from "rxjs/operators";


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
