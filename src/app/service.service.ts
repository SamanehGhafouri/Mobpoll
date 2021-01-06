import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import firebase from "firebase";
import Item = firebase.analytics.Item;

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private firebase: AngularFirestore) { }


}
