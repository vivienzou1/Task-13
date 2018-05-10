import {Component, ElementRef, ViewChild} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import  { AddLocationPage } from '../addLocation/addLocation';
declare var google;

@Component({
  selector: 'page-mark',
  templateUrl: 'mark.html'
})
export class MarkPage {


  marksLocation: any;

  transitLines: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

  }

  ionViewDidLoad(){

  }

  loadLocations() {
    if (localStorage.getItem("locations") != null) {
      this.marksLocation = localStorage.getItem("locations");
    }
    if (localStorage.getItem("transitLines") != null) {
      this.transitLines = localStorage.getItem("transitLines");
    }
  }


  locationSelected(location) {
    let prompt = this.alertCtrl.create({
      title: location.name,
      inputs: [
        {
          name: 'Home',
          placeholder: location.title
        },
      ],
      buttons: [
        {
          text: 'Save',
          handler: data => {

            console.log('Saved clicked');
          }
        },
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  addLocation() {
      this.navCtrl.push(AddLocationPage);
  }
}
