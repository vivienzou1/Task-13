import {Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DirectionPage } from '../direction/direction';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;


@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {


  @ViewChild("destinationInputView")
  destinationInputView;

  originInput: any;
  destinationInput: any;
  preference = "FEWER_TRANSFERS";
  originObject: any;
  destinationObject: any;
  recentSearchResult: any;

  originJudge: boolean = false;
  destinationJudge: boolean = false;

  originValue = "Current Location";
  destinationValue: any;
  className = true;

  constructor(public navCtrl: NavController, public geolocation:Geolocation) {
    setTimeout(() => {
      this.destinationInputView.setFocus();
    },150);

  }


  ionViewDidLoad(){
    this.originInput =  document.getElementById("originInput");
    this.destinationInput =  document.getElementById("destinationInput");
    // setTimeout(() => {
    //   this.destinationInputView.setFocus();
    // },150);
    this.loadMap();

  }

  ionViewWillEnter() {
    console.log("enter");
    //show the recent search results
    if (localStorage.getItem("recent") != null) {
      let recentSearch = localStorage.getItem("recent").split("!");
      let result = [];
      for (let item of recentSearch) {
        result.push(JSON.parse(item));
      }
      //reverse the order
      result.reverse();
      this.recentSearchResult =result;
    }
  }

  //select onChange event
  onChange() {
    // setTimeout(() => {
    //   this.destinationInputView.setFocus();
    // },150);

  }

  loadMap() {
    let main = this;
    // this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(  () => console.log('Request successful'),
    //   error => console.log('Error requesting location permissions', error)
    // );

    this.geolocation.getCurrentPosition().then((position) => {
      //add the position to the cache
      localStorage.setItem("position", position.coords.latitude + "," + position.coords.longitude);
      //get the placeId
      let latLng = {lat: position.coords.latitude, lng: position.coords.longitude};
      let geocoder = new google.maps.Geocoder;
      geocoder.geocode({'location': latLng}, function(results, status) {
        if (status === 'OK') {
          if (results[0]) {
           // console.log(results[0]);
            let name = results[0].formatted_address.split(",")[0];
            let tempObject = {
              "name": name,
              "place_id" : results[0].place_id
            }
            console.log("already get the location");
            main.originObject = tempObject;
          }
        }
      });
    });
    //set the autoComplete
    let originInput = this.originInput.getElementsByTagName('input')[0];
    let destinationInput = this.destinationInput.getElementsByTagName('input')[0];
    let originAutocomplete = new google.maps.places.Autocomplete(
      originInput);
    let destinationAutocomplete = new google.maps.places.Autocomplete(
      destinationInput);
    originAutocomplete.addListener('place_changed', function() {
      main.originObject = originAutocomplete.getPlace();
    });
    destinationAutocomplete.addListener('place_changed', function() {
      main.destinationObject = destinationAutocomplete.getPlace();
    });
    //show the recent search results
    if (localStorage.getItem("recent") != null) {
      let recentSearch = localStorage.getItem("recent").split("!");
      let result = [];
      for (let item of recentSearch) {
        result.push(JSON.parse(item));
      }
      //reverse the order
      result.reverse();
      this.recentSearchResult =result;
    }
  }

  //list item select event
  itemSelected(item) {
    if (this.originJudge) {
      this.originValue = item.name;
      this.originObject = item;
    } else  {
      this.destinationValue = item.name;
      this.destinationObject = item;
    }
  }

  //originInput click event
  enableOriginInput() {
    this.className = false;
    this.destinationJudge = false;
    this.originJudge = true;
    this.originValue = "";
  }
  //destinationInput click event
  enableDestinationInput() {
    this.originJudge = false;
    this.destinationValue = "";
    this.destinationJudge = true;
  }
  setOriginAndDestination()  {
    if (!this.originObject || !this.destinationObject) {
      return;
    }
    let tempOriginObject = {
      "name":this.originObject.name,
      "place_id" : this.originObject.place_id
    }
    let tempDestinationObject = {
      "name": this.destinationObject.name,
      "place_id": this.destinationObject.place_id
    }

    //set the input result into the cache
    if (localStorage.getItem("recent") != null) {
      let recentSearch = localStorage.getItem("recent").split("!");
      let judge1 = false;
      let judge2 = false;
      for (let item of recentSearch) {
        let jsonItem = JSON.parse(item);
        if (jsonItem.place_id == tempOriginObject.place_id) {
          judge1 = true;
        }
        if (jsonItem.place_id == tempDestinationObject.place_id) {
          judge2 = true;
        }
      }
      if (!judge1) {
        localStorage.setItem("recent", localStorage.getItem("recent") + "!" + JSON.stringify(tempOriginObject));
      }
      if (!judge2) {
        localStorage.setItem("recent", localStorage.getItem("recent") + "!"  + JSON.stringify(tempDestinationObject));
      }
    } else {
      localStorage.setItem("recent", JSON.stringify(tempOriginObject) + "!" + JSON.stringify(tempDestinationObject));
    }
    let params = {
      "originObject": tempOriginObject,
      "destinationObject": tempDestinationObject,
      "preference": this.preference
     }
    this.navCtrl.push(DirectionPage, params);
  }
}
