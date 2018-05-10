import {Component, ElementRef, ViewChild} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-direction',
  templateUrl: 'direction.html'
})
export class DirectionPage {

 //import the mapEle
  @ViewChild("map")
  mapElement: ElementRef;

  //import the navigationEle
  @ViewChild("navigation")
  navigationElement: ElementRef;

  originObject: any;
  destinationObject: any;
  map: any;
  preference: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geo: Geolocation) {
    this.originObject = navParams.get("originObject");
    this.destinationObject = navParams.get("destinationObject");
    this.preference = navParams.get("preference");
    console.log("origin" + this.originObject.name + "destination" + this.destinationObject.name + "preference" + this.preference);
  }

  ionViewDidLoad(){
    this.loadDirection();
  }

  loadDirection() {
    if (localStorage.getItem("position") != null) {
      let position = localStorage.getItem("position").split(",");
      let latLon = new google.maps.LatLng(position[0], position[1]);
      let mapOption = {
        center: latLon,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      //set the map
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOption);
      //show the route & pannels
      this.loadRoute();
    }
  }

  loadRoute() {
    let directionRenderer = new google.maps.DirectionsRenderer;
    directionRenderer.setMap(this.map);
    directionRenderer.setPanel(this.navigationElement.nativeElement);
    //get route
    let directionService = new google.maps.DirectionsService;
    directionService.route({
        origin: {'placeId': this.originObject.place_id},
        destination: {'placeId': this.destinationObject.place_id},
        travelMode: google.maps.TravelMode['TRANSIT'],
        provideRouteAlternatives: true,
       transitOptions:{
         routingPreference: this.preference
       }
    }, (res, status) => {
        if(status == google.maps.DirectionsStatus.OK){
          //change the render
          directionRenderer.setDirections(res);
        } else {
          console.warn(status);
        }
      });
  }
}
