import {Component, ElementRef, ViewChild} from '@angular/core';
import { NavController} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { busIdsService } from "../../app/services/getBusId";
import 'rxjs/add/observable/forkJoin';
import {Observable} from "rxjs/Observable";
import { ChangeDetectorRef } from '@angular/core';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  //import the mapEle
  @ViewChild("map")
  mapElement: ElementRef;
  map: any;
  resultItem: any;

  constructor(public navCtrl: NavController, public geolocation:Geolocation, public idsService: busIdsService,public cd: ChangeDetectorRef) {
    //this.loadMap();

  }

  ionViewDidLoad(){
    this.loadMap();
  }
  ngOnInit() {
    //this.loadMap();
  }

    loadMap() {
    //get the position
    //then((), ())
    let main = this;
    if (localStorage.getItem("position") != null) {
      let position = localStorage.getItem("position").split(",");
      let latLon = new google.maps.LatLng(position[0], position[1]);
      let mapOption = {
        center: latLon,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      //set the map
      main.map = new google.maps.Map(main.mapElement.nativeElement, mapOption);
      //set the marker
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
      }

      //get nearBy busStops
      let service = new google.maps.places.PlacesService(this.map);
      service.nearbySearch(nearByRequest, (res, status) => {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          let nearByBusStopsArr = [];
          for (let i = 0; i < res.length; i++) {
            let placeName = res[i].name;
            console.log(placeName);
            nearByBusStopsArr.push(placeName);
          }
          //add to set
          let nearByBusStopsStrSet = new Set(nearByBusStopsArr);
          let nearByRequests = [];
          nearByBusStopsStrSet.forEach(function (element, sameElement, set) {
            console.log(element);
            nearByRequests.push(main.idsService.getResults(element));
          });
          Observable.forkJoin(nearByRequests)
            .subscribe(data => {
              //get requests stopIds List
              let stopIds = [];
              for (let dataItem of data) {
                for (let item of dataItem["stopIds"]) {
                  stopIds.push(item);
                }
              }

              console.log(stopIds);
              localStorage.setItem("stopIds", stopIds.toString());

              //set timer
              setInterval(function () {
                console.log(stopIds.toString() + "---");
                //get request buses List
                let requestList = [];
                for(let j = 0,len=stopIds.length; j < len; j++) {
                  let getTemp = main.idsService.getBusResults(stopIds[j]);
                  requestList.push(getTemp);
                }

                Observable.forkJoin(requestList)
                  .subscribe(data => {
                    let resultMap = new Map();
                    for (let dataItem of data) {
                      let prds = dataItem["bustime-response"]["prd"];
                      if (prds != null && prds.length > 0) {
                        for (let prd of prds) {
                          //find the nearest bus
                          let key = prd["rt"] + prd["rtdir"];
                          if (!resultMap.has(key)) {
                            resultMap.set(key, prd);
                          }
                        }
                      }
                    }
                    let result = [];
                    resultMap.forEach((value, key, map) => {
                        console.log(key);
                        let tempValue = {
                          "rt": value["rt"],
                          "rtdir": value["rtdir"],
                          "stpnm": value["stpnm"],
                          "prdctdn": value["prdctdn"],
                          "des": value["des"].toUpperCase()
                        }
                        result.push(tempValue);
                        console.log(value["rt"]);
                        console.log(value["rtdir"]);
                        console.log(value["stpnm"]);
                        console.log(value["prdctdn"]);
                      }
                    );
                    main.resultItem = result;
                    //refresh the page
                    main.cd.detectChanges();
                  });
              }, 100 * 1000);

              //get request buses List
              let requestList = [];
              for(let j = 0,len=stopIds.length; j < len; j++) {
                let getTemp = this.idsService.getBusResults(stopIds[j]);
                requestList.push(getTemp);
              }
              //get the bus information which has the nearest location
              Observable.forkJoin(requestList)
                .subscribe(data => {
                  let resultMap = new Map();
                  for (let dataItem of data) {
                    let prds = dataItem["bustime-response"]["prd"];
                    if (prds != null && prds.length > 0) {
                      for (let prd of prds) {
                        //find the nearest bus
                        let key = prd["rt"] + prd["rtdir"];
                        if (!resultMap.has(key)) {
                          resultMap.set(key, prd);
                        }
                      }
                    }
                  }

                  let result = [];
                  let busMap = new Map();
                  resultMap.forEach((value, key, map) => {
                      console.log(key);
                      let tempValue = {
                        "rt": value["rt"],
                        "rtdir": value["rtdir"],
                        "stpnm": value["stpnm"],
                        "prdctdn": value["prdctdn"],
                        "des": value["des"].toUpperCase()

                      }
                      result.push(tempValue);
                      console.log(value["rt"]);
                      console.log(value["rtdir"]);
                      console.log(value["stpnm"]);
                      console.log(value["prdctdn"]);
                    }
                  );
                  this.resultItem = result;
                  //refresh the page
                  this.cd.detectChanges();
                  console.log(this.resultItem);
                });
            });

        }
      });
  }
}

}
