import {Component, ElementRef, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { busIdsService } from "../../app/services/getBusId";
import 'rxjs/add/observable/forkJoin';
import {Observable} from "rxjs/Observable";
import { ChangeDetectorRef } from '@angular/core';

declare var google;


@Component({
  selector: 'page-nearStops',
  templateUrl: 'nearStops.html'
})
export class nearStopsPage {

  //import the mapEle
  @ViewChild("map2")
  mapElement: ElementRef;

  map: any;
  judge: boolean = false;
  resultItem: any;

  constructor(public navCtrl: NavController, public idService: busIdsService,public cd: ChangeDetectorRef) {
  }
  ngOnInit() {
    this.load();
  }

  load() {
    let main = this;
    if (localStorage.getItem("position") != null) {
      let position = localStorage.getItem("position").split(",");
      let latLon = new google.maps.LatLng(position[0], position[1]);
      let mapOption = {
        center: latLon,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      //set the map
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOption);
      //set the markers
      console.log("------create the map");
      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: latLon
      });
      //nearBy requests ranked by distances
      let nearByRequest = {
        location: latLon,
        rankBy:google.maps.places.RankBy.DISTANCE,
        //radius: '400',
        type: ['bus_station']
      };
      let image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

      let service = new google.maps.places.PlacesService(this.map);
      service.nearbySearch(nearByRequest, (res, status) => {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          let tempWindows = [];
          for (let item of res) {
            let tempMarker = new google.maps.Marker({
              map: this.map,
              position: item.geometry.location,
              icon: image
            });
          //add inforWindow
            let tempInfoWindow = new google.maps.InfoWindow({
              content: item.name
            });
            tempWindows.push(tempInfoWindow);
            //set the listener
            google.maps.event.addListener(tempMarker, "click", () => {
              tempInfoWindow.open(this.map, tempMarker);
            });
          }
          //close the inforWindow
          google.maps.event.addListener(this.map, "click", () => {
            for (let tempWindow of tempWindows) {
              tempWindow.close();
            }
          });
        }
      });

      let stopIdsArr = localStorage.getItem("stopIds").split(",");

      //set timer
      setInterval(function () {
        let requestList = [];
        for(let j = 0,len=stopIdsArr.length; j < len; j++) {
          let getTemp = main.idService.getBusResults(stopIdsArr[j]);
          requestList.push(getTemp);
        }
        Observable.forkJoin(requestList)
          .subscribe(data => {
            let resultMap = [];
            for (let dataItem of data) {
              let prds = dataItem["bustime-response"]["prd"];
              if (prds != null && prds.length > 0) {
                let tempBuses = []
                let stopId;
                let stopName;
                for (let prd of prds) {
                  //find the nearest bus
                  let tempValue = {
                    "rt": prd["rt"],
                    "rtdir": prd["rtdir"],
                    "stpnm": prd["stpnm"],
                    "prdctdn": prd["prdctdn"]
                  }
                  stopName = prd['stpnm'];
                  stopId = prd['stpid'];
                  tempBuses.push(tempValue);
                }
                let tempRes = {
                  "stopId": stopId,
                  "stopName": stopName,
                  "tempBuses": tempBuses
                }
                resultMap.push(tempRes);
              }
            }
            main.resultItem = resultMap;
            //refresh the pages
            main.cd.detectChanges();
            console.log(main.resultItem);
          });
      }, 8 * 1000);

      //get request buses List
      let requestList = [];
      for(let j = 0,len=stopIdsArr.length; j < len; j++) {
        let getTemp = this.idService.getBusResults(stopIdsArr[j]);
        requestList.push(getTemp);
      }
      Observable.forkJoin(requestList)
        .subscribe(data => {
          let resultMap = [];
          for (let dataItem of data) {
            let prds = dataItem["bustime-response"]["prd"];
            if (prds != null && prds.length > 0) {
              let tempBuses = []
              let stopId;
              let stopName;
              for (let prd of prds) {
                //find the nearest bus
                let tempValue = {
                  "rt": prd["rt"],
                  "rtdir": prd["rtdir"],
                  "stpnm": prd["stpnm"],
                  "prdctdn": prd["prdctdn"]
                }
                stopName = prd['stpnm'];
                stopId = prd['stpid'];
                tempBuses.push(tempValue);
              }
              let tempRes = {
                "stopId": stopId,
                "stopName": stopName,
                "tempBuses": tempBuses
              }
              resultMap.push(tempRes);
            }
          }
          this.resultItem = resultMap;
          //refresh the pages
          this.cd.detectChanges();
          console.log(this.resultItem);
        });

    }
  }
}
