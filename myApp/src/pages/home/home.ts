import {Component, ElementRef, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';



declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  //import the mapEle
  @ViewChild("map")
  mapElement: ElementRef;

  //import the navigationEle
  @ViewChild("navigation")
  navigationElement: ElementRef;
  map: any;
  originName: any;
  destinationName: any;

  //import geolocation from export
  constructor(public navCtrl: NavController, public geolocation:Geolocation) {

  }

  ionViewDidLoad(){
    this.loadMap();
    //this.addNavigation();
  }


  loadMap() {
    //get the position
    //then((), ())
    this.geolocation.getCurrentPosition().then((position) => {
      let latLon = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      console.log(position.coords.latitude + "---" + position.coords.longitude);
      let mapOption = {
        center: latLon,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOption);
    }, (err) => {
      console.log(err);
    })


    // let latLon = new google.maps.LatLng(40.4408287, 79.9435857);
    // let mapOption = {
    //   center: latLon,
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // }
    // this.map = new google.maps.Map(this.mapElement.nativeElement, mapOption);


  }

  //add the marker and register the listener for inforWindow
  addMarker() {
    //add the marker
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    //add inforWindow
    let infoWindow = new google.maps.InfoWindow({
      content: "you are here"
    });
    //set the listener
    google.maps.event.addListener(marker, "click", () => {
      infoWindow.open(this.map, marker);
    });
  }

  // addNavigation() {
  //   let directionService = new google.maps.DirectionsService;
  //   let directionRenderer = new google.maps.DirectionsRenderer;
  //   directionRenderer.setMap(this.map);
  //   directionRenderer.setPanel(this.navigationElement.nativeElement);
  //   directionService.route({
  //     origin: 'CMU',
  //     destination: 'Kenmawar Apartments',
  //     travelMode: google.maps.TravelMode['DRIVING']
  //   }, (res, status) => {
  //     if(status == google.maps.DirectionsStatus.OK){
  //       //change the render
  //       directionRenderer.setDirections(res);
  //     } else {
  //       console.warn(status);
  //     }
  //
  //   });
  // }

  setOriginAndDestination() {
    let directionService = new google.maps.DirectionsService;
    let directionRenderer = new google.maps.DirectionsRenderer;
    directionRenderer.setMap(this.map);
    directionRenderer.setPanel(this.navigationElement.nativeElement);
    directionService.route({
      origin: this.originName,
      destination: this.destinationName,
      travelMode: google.maps.TravelMode['DRIVING']
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
