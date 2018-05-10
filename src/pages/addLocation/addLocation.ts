import {Component, ElementRef, ViewChild} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular';
import {P} from "@angular/core/src/render3";

declare var google;

@Component({
  selector: 'page-addLocation',
  templateUrl: 'addLocation.html'
})
export class AddLocationPage {


  locationInput: any;
  locationObject: any;
  @ViewChild("locationInput")
  locationInputElement: ElementRef;

  //import the mapEle
  @ViewChild("map")
  mapElement: ElementRef;

  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geo: Geolocation,  public alertCtrl: AlertController) {

  }


  ionViewDidLoad(){
    this.locationInput =  document.getElementById("locationInput");
    this.load();
  }

  load() {
    //set the map
    if (localStorage.getItem("position") != null) {
      let main = this;
      let position = localStorage.getItem("position").split(",");
      let latLon = new google.maps.LatLng(position[0], position[1]);
      let mapOption = {
        center: latLon,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      //set the map
      //this.map = new google.maps.Map(this.mapElement.nativeElement, mapOption);
      //this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(this.locationInputElement);

      //set the autoComplete
      let locationInput = this.locationInput.getElementsByTagName('input')[0];
      let locationAutocomplete = new google.maps.places.Autocomplete(
        locationInput);
      locationAutocomplete.addListener('place_changed', function() {
        main.locationObject = locationAutocomplete.getPlace();
        let lat = main.locationObject.geometry.location;

         //main.map.setCenter({ lat: yourLat, lng: yourLng })
      });
    }
  }

  saveLocation() {
    let prompt = this.alertCtrl.create({
      title: this.locationObject.formatted_address,
      inputs: [
        {
          name: 'title',
          placeholder: "Home"
        },
      ],
      buttons: [
        {
          text: 'Save',
          handler: data => {
            console.log(data.title);
            let temp = {
              "title": data.title,
              "name": ""
            }
            if (localStorage.getItem("locations") != null) {

            } else {
              
            }
            this.navCtrl.pop();
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

}
