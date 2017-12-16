import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public contact:string = "Henri";
  constructor(public navCtrl: NavController) {

  }

}
