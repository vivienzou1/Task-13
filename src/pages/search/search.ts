import {Component, ElementRef, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { DirectionPage } from '../direction/direction';

declare var google;


@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  originInput: any;
  destinationInput: any;
  preference: any;
  originObject: any;
  destinationObject: any;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.originInput =  document.getElementById("originInput");
    this.destinationInput =  document.getElementById("destinationInput");
  }

  ionViewWillEnter() {
    this.loadMap();
  }


  loadMap() {
    //set the autoComplete
    let originInput = this.originInput.getElementsByTagName('input')[0];
    let destinationInput = this.destinationInput.getElementsByTagName('input')[0];
    let originAutocomplete = new google.maps.places.Autocomplete(
      originInput);
    let destinationAutocomplete = new google.maps.places.Autocomplete(
      destinationInput);
    let main = this;
    originAutocomplete.addListener('place_changed', function() {
      main.originObject = originAutocomplete.getPlace();
    });
    destinationAutocomplete.addListener('place_changed', function() {
      main.destinationObject = destinationAutocomplete.getPlace();
    });
  }

  setOriginAndDestination()  {
    if (!this.originObject || !this.destinationObject) {
      return;
    }
    let params = {
      "originObject": this.originObject,
      "destinationObject": this.destinationObject,
      "preference": "LESS_WALKING"
     }
    this.navCtrl.push(DirectionPage, params);
  }
}
