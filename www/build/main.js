webpackJsonp([0],{

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return busIdsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var busIdsService = /** @class */ (function () {
    function busIdsService(http) {
        this.http = http;
        //this.baseUrl = "http://127.0.0.1:5000/getBusStopIds";
        this.baseUrl = "http://ec2-54-172-140-42.compute-1.amazonaws.com:5000/getBusStopIds";
        this.baseUrl2 = "http://realtime.portauthority.org/bustime/api/v2/getpredictions?key=rEn9KzMCKtNEYfEbGucMDfRUr&format=json&localestring=en_US&stpid=";
        //this.baseUrl2 = "http://realtime.portauthority.org/bustime/api/v2/getpredictions?key=sa9PrTQzmvKqNZmWJvPX9ykmR&format=json&localestring=en_US&stpid=";
    }
    busIdsService.prototype.getResults = function (requestParam) {
        var req = {
            "placeName": requestParam
        };
        return this.http.post(this.baseUrl, req)
            .map(function (data) { return data.json(); });
    };
    busIdsService.prototype.getBusResults = function (stopId) {
        var requestUrl = this.baseUrl2 + stopId;
        return this.http.get(requestUrl)
            .map(function (res) { return res.json(); });
    };
    busIdsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], busIdsService);
    return busIdsService;
}());

//# sourceMappingURL=getBusId.js.map

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 207;

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nearStops_nearStops__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mark_mark__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__nearStops_nearStops__["a" /* nearStopsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__mark_mark__["a" /* MarkPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/blutory/Documents/Ebiz_Classes/Task-13/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Search" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Stops" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Buses" tabIcon="bus"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Marks" tabIcon="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/blutory/Documents/Ebiz_Classes/Task-13/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nearStopsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_getBusId__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var nearStopsPage = /** @class */ (function () {
    function nearStopsPage(navCtrl, idService, cd) {
        this.navCtrl = navCtrl;
        this.idService = idService;
        this.cd = cd;
        this.judge = false;
    }
    nearStopsPage.prototype.ngOnInit = function () {
        this.load();
    };
    nearStopsPage.prototype.load = function () {
        var _this = this;
        var main = this;
        if (localStorage.getItem("position") != null) {
            var position = localStorage.getItem("position").split(",");
            var latLon = new google.maps.LatLng(position[0], position[1]);
            var mapOption = {
                center: latLon,
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            //set the map
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOption);
            //set the markers
            console.log("------create the map");
            var marker = new google.maps.Marker({
                map: this.map,
                animation: google.maps.Animation.DROP,
                position: latLon
            });
            //nearBy requests ranked by distances
            var nearByRequest = {
                location: latLon,
                rankBy: google.maps.places.RankBy.DISTANCE,
                //radius: '400',
                type: ['bus_station']
            };
            //let image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
            //let image = "../../assets/icon/bus.png";
            var image_1 = {
                url: "../../assets/icon/bus.png",
                size: new google.maps.Size(25, 40),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(12, 21),
                scaledSize: new google.maps.Size(22, 22)
            };
            //nearby Service
            var service = new google.maps.places.PlacesService(this.map);
            service.nearbySearch(nearByRequest, function (res, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    //inforWindowsList
                    var tempWindows_1 = [];
                    var tempMarkers = [];
                    for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                        var item = res_1[_i];
                        var tempMarker = new google.maps.Marker({
                            map: _this.map,
                            position: item.geometry.location,
                            icon: image_1
                        });
                        //add inforWindow
                        var tempInfoWindow = new google.maps.InfoWindow({
                            content: item.name
                        });
                        tempMarkers.push(tempMarker);
                        tempWindows_1.push(tempInfoWindow);
                    }
                    var _loop_1 = function (i, length_1) {
                        var tempMarker = tempMarkers[i];
                        var tempInfoWindow = tempWindows_1[i];
                        //set the listener
                        google.maps.event.addListener(tempMarker, "click", function () {
                            main.judge = true;
                            //close all inforwindows
                            for (var _i = 0, tempWindows_2 = tempWindows_1; _i < tempWindows_2.length; _i++) {
                                var tempWindow = tempWindows_2[_i];
                                tempWindow.close();
                            }
                            tempInfoWindow.open(_this.map, tempMarker);
                            console.log(tempInfoWindow.content + "-----");
                            main.idService.getResults(tempInfoWindow.content).subscribe(function (data) {
                                var requestList = [];
                                for (var _i = 0, _a = data["stopIds"]; _i < _a.length; _i++) {
                                    var stopId = _a[_i];
                                    var getTemp = main.idService.getBusResults(stopId);
                                    requestList.push(getTemp);
                                }
                                __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin(requestList)
                                    .subscribe(function (data) {
                                    var resultMap = [];
                                    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                                        var dataItem = data_1[_i];
                                        var prds = dataItem["bustime-response"]["prd"];
                                        if (prds != null && prds.length > 0) {
                                            var tempBuses = [];
                                            var stopId = void 0;
                                            var stopName = void 0;
                                            for (var _a = 0, prds_1 = prds; _a < prds_1.length; _a++) {
                                                var prd = prds_1[_a];
                                                //find the nearest bus
                                                var tempValue = {
                                                    "rt": prd["rt"],
                                                    "rtdir": prd["rtdir"],
                                                    "stpnm": prd["stpnm"],
                                                    "prdctdn": prd["prdctdn"],
                                                    "des": prd["des"].toUpperCase()
                                                };
                                                stopName = prd['stpnm'];
                                                stopId = prd['stpid'];
                                                tempBuses.push(tempValue);
                                            }
                                            var tempRes = {
                                                "stopId": stopId,
                                                "stopName": stopName,
                                                "tempBuses": tempBuses
                                            };
                                            resultMap.push(tempRes);
                                        }
                                    }
                                    main.resultItem = resultMap;
                                    //refresh the pages
                                    main.cd.detectChanges();
                                    console.log(main.resultItem);
                                });
                            });
                        });
                    };
                    for (var i = 0, length_1 = tempMarkers.length; i < length_1; i++) {
                        _loop_1(i, length_1);
                    }
                    //click the map to close the inforWindow
                    google.maps.event.addListener(_this.map, "click", function () {
                        //turn to false
                        main.judge = false;
                        //close all inforwindows
                        for (var _i = 0, tempWindows_3 = tempWindows_1; _i < tempWindows_3.length; _i++) {
                            var tempWindow = tempWindows_3[_i];
                            tempWindow.close();
                        }
                        //get the whole data
                        var stopIdsArr = localStorage.getItem("stopIds").split(",");
                        //get request buses List
                        var requestList = [];
                        for (var j = 0, len = stopIdsArr.length; j < len; j++) {
                            var getTemp = _this.idService.getBusResults(stopIdsArr[j]);
                            requestList.push(getTemp);
                        }
                        __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin(requestList)
                            .subscribe(function (data) {
                            var resultMap = [];
                            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                                var dataItem = data_2[_i];
                                var prds = dataItem["bustime-response"]["prd"];
                                if (prds != null && prds.length > 0) {
                                    var tempBuses = [];
                                    var stopId = void 0;
                                    var stopName = void 0;
                                    for (var _a = 0, prds_2 = prds; _a < prds_2.length; _a++) {
                                        var prd = prds_2[_a];
                                        //find the nearest bus
                                        var tempValue = {
                                            "rt": prd["rt"],
                                            "rtdir": prd["rtdir"],
                                            "stpnm": prd["stpnm"],
                                            "prdctdn": prd["prdctdn"],
                                            "des": prd["des"].toUpperCase()
                                        };
                                        stopName = prd['stpnm'];
                                        stopId = prd['stpid'];
                                        tempBuses.push(tempValue);
                                    }
                                    var tempRes = {
                                        "stopId": stopId,
                                        "stopName": stopName,
                                        "tempBuses": tempBuses
                                    };
                                    resultMap.push(tempRes);
                                }
                            }
                            _this.resultItem = resultMap;
                            //refresh the pages
                            _this.cd.detectChanges();
                            console.log(_this.resultItem);
                        });
                    });
                }
            });
            //draw the bottom
            var stopIdsArr_1 = localStorage.getItem("stopIds").split(",");
            //set timer
            setInterval(function () {
                if (main.judge) {
                    return;
                }
                var requestList = [];
                for (var j = 0, len = stopIdsArr_1.length; j < len; j++) {
                    var getTemp = main.idService.getBusResults(stopIdsArr_1[j]);
                    requestList.push(getTemp);
                }
                __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin(requestList)
                    .subscribe(function (data) {
                    var resultMap = [];
                    for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                        var dataItem = data_3[_i];
                        var prds = dataItem["bustime-response"]["prd"];
                        if (prds != null && prds.length > 0) {
                            var tempBuses = [];
                            var stopId = void 0;
                            var stopName = void 0;
                            for (var _a = 0, prds_3 = prds; _a < prds_3.length; _a++) {
                                var prd = prds_3[_a];
                                //find the nearest bus
                                var tempValue = {
                                    "rt": prd["rt"],
                                    "rtdir": prd["rtdir"],
                                    "stpnm": prd["stpnm"],
                                    "prdctdn": prd["prdctdn"],
                                    "des": prd["des"].toUpperCase()
                                };
                                stopName = prd['stpnm'];
                                stopId = prd['stpid'];
                                tempBuses.push(tempValue);
                            }
                            var tempRes = {
                                "stopId": stopId,
                                "stopName": stopName,
                                "tempBuses": tempBuses
                            };
                            resultMap.push(tempRes);
                        }
                    }
                    main.resultItem = resultMap;
                    //refresh the pages
                    main.cd.detectChanges();
                    console.log(main.resultItem);
                });
            }, 30 * 1000);
            //get request buses List
            var requestList = [];
            for (var j = 0, len = stopIdsArr_1.length; j < len; j++) {
                var getTemp = this.idService.getBusResults(stopIdsArr_1[j]);
                requestList.push(getTemp);
            }
            __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin(requestList)
                .subscribe(function (data) {
                var resultMap = [];
                for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
                    var dataItem = data_4[_i];
                    var prds = dataItem["bustime-response"]["prd"];
                    if (prds != null && prds.length > 0) {
                        var tempBuses = [];
                        var stopId = void 0;
                        var stopName = void 0;
                        for (var _a = 0, prds_4 = prds; _a < prds_4.length; _a++) {
                            var prd = prds_4[_a];
                            //find the nearest bus
                            var tempValue = {
                                "rt": prd["rt"],
                                "rtdir": prd["rtdir"],
                                "stpnm": prd["stpnm"],
                                "prdctdn": prd["prdctdn"],
                                "des": prd["des"].toUpperCase()
                            };
                            stopName = prd['stpnm'];
                            stopId = prd['stpid'];
                            tempBuses.push(tempValue);
                        }
                        var tempRes = {
                            "stopId": stopId,
                            "stopName": stopName,
                            "tempBuses": tempBuses
                        };
                        resultMap.push(tempRes);
                    }
                }
                _this.resultItem = resultMap;
                //refresh the pages
                _this.cd.detectChanges();
                console.log(_this.resultItem);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("map2"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], nearStopsPage.prototype, "mapElement", void 0);
    nearStopsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nearStops',template:/*ion-inline-start:"/Users/blutory/Documents/Ebiz_Classes/Task-13/src/pages/nearStops/nearStops.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Bus Stops\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div #map2 id="map2"></div>\n  <div class="nearbyList">\n    <ion-list *ngIf="resultItem">\n      <ion-item class="itemResult" *ngFor="let res of resultItem">\n        <h4>{{ res.stopId }} &nbsp;{{ res.stopName }}</h4>\n        <ion-item  class="itemBus" *ngFor="let bus of res.tempBuses">\n          <h4>{{ bus.rt }}</h4>\n          <h4><ion-icon name="arrow-dropright-circle"></ion-icon>&nbsp;{{ bus.rtdir }} {{ bus.des }}</h4>\n          <ion-note item-right class="note">\n            <h3>{{ bus.prdctdn }}</h3>\n            <h3>minutes</h3>\n          </ion-note>\n        </ion-item>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/blutory/Documents/Ebiz_Classes/Task-13/src/pages/nearStops/nearStops.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_services_getBusId__["a" /* busIdsService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], nearStopsPage);
    return nearStopsPage;
}());

//# sourceMappingURL=nearStops.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__direction_direction__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, geolocation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.preference = "FEWER_TRANSFERS";
        this.originJudge = false;
        this.destinationJudge = false;
        this.originValue = "Current Location";
        this.className = true;
        setTimeout(function () {
            _this.destinationInputView.setFocus();
        }, 150);
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        this.originInput = document.getElementById("originInput");
        this.destinationInput = document.getElementById("destinationInput");
        // setTimeout(() => {
        //   this.destinationInputView.setFocus();
        // },150);
        this.loadMap();
    };
    SearchPage.prototype.ionViewWillEnter = function () {
        console.log("enter");
        //show the recent search results
        if (localStorage.getItem("recent") != null) {
            var recentSearch = localStorage.getItem("recent").split("!");
            var result = [];
            for (var _i = 0, recentSearch_1 = recentSearch; _i < recentSearch_1.length; _i++) {
                var item = recentSearch_1[_i];
                result.push(JSON.parse(item));
            }
            //reverse the order
            result.reverse();
            this.recentSearchResult = result;
        }
    };
    //select onChange event
    SearchPage.prototype.onChange = function () {
        // setTimeout(() => {
        //   this.destinationInputView.setFocus();
        // },150);
    };
    SearchPage.prototype.loadMap = function () {
        var main = this;
        // this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(  () => console.log('Request successful'),
        //   error => console.log('Error requesting location permissions', error)
        // );
        this.geolocation.getCurrentPosition().then(function (position) {
            //add the position to the cache
            localStorage.setItem("position", position.coords.latitude + "," + position.coords.longitude);
            //get the placeId
            var latLng = { lat: position.coords.latitude, lng: position.coords.longitude };
            var geocoder = new google.maps.Geocoder;
            geocoder.geocode({ 'location': latLng }, function (results, status) {
                if (status === 'OK') {
                    if (results[0]) {
                        // console.log(results[0]);
                        var name_1 = results[0].formatted_address.split(",")[0];
                        var tempObject = {
                            "name": name_1,
                            "place_id": results[0].place_id
                        };
                        console.log("already get the location");
                        main.originObject = tempObject;
                    }
                }
            });
        });
        //set the autoComplete
        var originInput = this.originInput.getElementsByTagName('input')[0];
        var destinationInput = this.destinationInput.getElementsByTagName('input')[0];
        var originAutocomplete = new google.maps.places.Autocomplete(originInput);
        var destinationAutocomplete = new google.maps.places.Autocomplete(destinationInput);
        originAutocomplete.addListener('place_changed', function () {
            main.originObject = originAutocomplete.getPlace();
        });
        destinationAutocomplete.addListener('place_changed', function () {
            main.destinationObject = destinationAutocomplete.getPlace();
        });
        //show the recent search results
        if (localStorage.getItem("recent") != null) {
            var recentSearch = localStorage.getItem("recent").split("!");
            var result = [];
            for (var _i = 0, recentSearch_2 = recentSearch; _i < recentSearch_2.length; _i++) {
                var item = recentSearch_2[_i];
                result.push(JSON.parse(item));
            }
            //reverse the order
            result.reverse();
            this.recentSearchResult = result;
        }
    };
    //list item select event
    SearchPage.prototype.itemSelected = function (item) {
        if (this.originJudge) {
            this.originValue = item.name;
            this.originObject = item;
        }
        else {
            this.destinationValue = item.name;
            this.destinationObject = item;
        }
    };
    //originInput click event
    SearchPage.prototype.enableOriginInput = function () {
        this.className = false;
        this.destinationJudge = false;
        this.originJudge = true;
        this.originValue = "";
    };
    //destinationInput click event
    SearchPage.prototype.enableDestinationInput = function () {
        this.originJudge = false;
        this.destinationValue = "";
        this.destinationJudge = true;
    };
    SearchPage.prototype.setOriginAndDestination = function () {
        if (!this.originObject || !this.destinationObject) {
            return;
        }
        var tempOriginObject = {
            "name": this.originObject.name,
            "place_id": this.originObject.place_id
        };
        var tempDestinationObject = {
            "name": this.destinationObject.name,
            "place_id": this.destinationObject.place_id
        };
        //set the input result into the cache
        if (localStorage.getItem("recent") != null) {
            var recentSearch = localStorage.getItem("recent").split("!");
            var judge1 = false;
            var judge2 = false;
            for (var _i = 0, recentSearch_3 = recentSearch; _i < recentSearch_3.length; _i++) {
                var item = recentSearch_3[_i];
                var jsonItem = JSON.parse(item);
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
                localStorage.setItem("recent", localStorage.getItem("recent") + "!" + JSON.stringify(tempDestinationObject));
            }
        }
        else {
            localStorage.setItem("recent", JSON.stringify(tempOriginObject) + "!" + JSON.stringify(tempDestinationObject));
        }
        var params = {
            "originObject": tempOriginObject,
            "destinationObject": tempDestinationObject,
            "preference": this.preference
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__direction_direction__["a" /* DirectionPage */], params);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("destinationInputView"),
        __metadata("design:type", Object)
    ], SearchPage.prototype, "destinationInputView", void 0);
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/blutory/Documents/Ebiz_Classes/Task-13/src/pages/search/search.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Search</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!--submit the form-->\n  <form (submit) = "setOriginAndDestination()" class="formClass">\n  <ion-list>\n    <!--originInput-->\n    <ion-item>\n       <ion-input #originInput type="text"  id="originInput" (click) = "enableOriginInput()" [(ngModel)] = "originValue" name="originValue"  placeholder="Origin"\n                  [ngClass]="{ true : \'trueStyle\',false: \'falseStyle\'}[className]"></ion-input>\n    </ion-item>\n    <!--destinationInput-->\n    <ion-item>\n     <ion-input #destinationInputView type="text"  id="destinationInput"  (click) = "enableDestinationInput()" [(ngModel)] = "destinationValue" name="destinationValue" placeholder="Destination" ></ion-input>\n    </ion-item>\n    <!--preference-->\n    <ion-item>\n      <ion-label fixed>Preference</ion-label>\n      <ion-select [(ngModel)]="preference" name="preference" class="select" (ionChange)="onChange()">\n        <ion-option value="FEWER_TRANSFERS" >fewer transfers</ion-option>\n        <ion-option value="LESS_WALKING">Less walking</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <button ion-button type="submit"  block>submit</button>\n  </form>\n   <ion-list *ngIf="recentSearchResult" class="searchHistory">\n     <ion-list-header>\n       Recent Searches\n     </ion-list-header>\n     <button ion-item *ngFor="let item of recentSearchResult" (click)="itemSelected(item)">\n      {{ item.name }}\n    </button>\n   </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/blutory/Documents/Ebiz_Classes/Task-13/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DirectionPage = /** @class */ (function () {
    function DirectionPage(navCtrl, navParams, geo) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geo = geo;
        this.originObject = navParams.get("originObject");
        this.destinationObject = navParams.get("destinationObject");
        this.preference = navParams.get("preference");
        console.log("origin" + this.originObject.name + "destination" + this.destinationObject.name + "preference" + this.preference);
    }
    DirectionPage.prototype.ionViewDidLoad = function () {
        this.loadDirection();
    };
    DirectionPage.prototype.loadDirection = function () {
        if (localStorage.getItem("position") != null) {
            var position = localStorage.getItem("position").split(",");
            var latLon = new google.maps.LatLng(position[0], position[1]);
            var mapOption = {
                center: latLon,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            //set the map
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOption);
            //show the route & pannels
            this.loadRoute();
        }
    };
    DirectionPage.prototype.loadRoute = function () {
        var directionRenderer = new google.maps.DirectionsRenderer;
        directionRenderer.setMap(this.map);
        directionRenderer.setPanel(this.navigationElement.nativeElement);
        //get route
        var directionService = new google.maps.DirectionsService;
        directionService.route({
            origin: { 'placeId': this.originObject.place_id },
            destination: { 'placeId': this.destinationObject.place_id },
            travelMode: google.maps.TravelMode['TRANSIT'],
            provideRouteAlternatives: true,
            transitOptions: {
                routingPreference: this.preference
            }
        }, function (res, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                //change the render
                directionRenderer.setDirections(res);
            }
            else {
                console.warn(status);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("map"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], DirectionPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("navigation"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], DirectionPage.prototype, "navigationElement", void 0);
    DirectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-direction',template:/*ion-inline-start:"/Users/blutory/Documents/Ebiz_Classes/Task-13/src/pages/direction/direction.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Direction\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!--show the map-->\n  <div #map id="map"></div>\n  <!--show the route -->\n  <div #navigation></div>\n</ion-content>\n'/*ion-inline-end:"/Users/blutory/Documents/Ebiz_Classes/Task-13/src/pages/direction/direction.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], DirectionPage);
    return DirectionPage;
}());

//# sourceMappingURL=direction.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_getBusId__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, geolocation, idsService, cd) {
        //this.loadMap();
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.idsService = idsService;
        this.cd = cd;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    HomePage.prototype.ngOnInit = function () {
        //this.loadMap();
    };
    HomePage.prototype.loadMap = function () {
        var _this = this;
        //get the position
        //then((), ())
        var main = this;
        if (localStorage.getItem("position") != null) {
            var position = localStorage.getItem("position").split(",");
            var latLon = new google.maps.LatLng(position[0], position[1]);
            var mapOption = {
                center: latLon,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            //set the map
            main.map = new google.maps.Map(main.mapElement.nativeElement, mapOption);
            //set the marker
            var marker = new google.maps.Marker({
                map: this.map,
                animation: google.maps.Animation.DROP,
                position: latLon
            });
            //nearBy requests ranked by distances
            var nearByRequest = {
                location: latLon,
                rankBy: google.maps.places.RankBy.DISTANCE,
                //radius: '400',
                type: ['bus_station']
            };
            //get nearBy busStops
            var service = new google.maps.places.PlacesService(this.map);
            service.nearbySearch(nearByRequest, function (res, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    var nearByBusStopsArr = [];
                    for (var i = 0; i < res.length; i++) {
                        var placeName = res[i].name;
                        console.log(placeName);
                        nearByBusStopsArr.push(placeName);
                    }
                    //add to set
                    var nearByBusStopsStrSet = new Set(nearByBusStopsArr);
                    var nearByRequests_1 = [];
                    nearByBusStopsStrSet.forEach(function (element, sameElement, set) {
                        console.log(element);
                        nearByRequests_1.push(main.idsService.getResults(element));
                    });
                    __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].forkJoin(nearByRequests_1)
                        .subscribe(function (data) {
                        //get requests stopIds List
                        var stopIds = [];
                        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                            var dataItem = data_1[_i];
                            for (var _a = 0, _b = dataItem["stopIds"]; _a < _b.length; _a++) {
                                var item = _b[_a];
                                stopIds.push(item);
                            }
                        }
                        console.log(stopIds);
                        localStorage.setItem("stopIds", stopIds.toString());
                        //set timer
                        setInterval(function () {
                            console.log(stopIds.toString() + "---");
                            //get request buses List
                            var requestList = [];
                            for (var j = 0, len = stopIds.length; j < len; j++) {
                                var getTemp = main.idsService.getBusResults(stopIds[j]);
                                requestList.push(getTemp);
                            }
                            __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].forkJoin(requestList)
                                .subscribe(function (data) {
                                var resultMap = new Map();
                                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                                    var dataItem = data_2[_i];
                                    var prds = dataItem["bustime-response"]["prd"];
                                    if (prds != null && prds.length > 0) {
                                        for (var _a = 0, prds_1 = prds; _a < prds_1.length; _a++) {
                                            var prd = prds_1[_a];
                                            //find the nearest bus
                                            var key = prd["rt"] + prd["rtdir"];
                                            if (!resultMap.has(key)) {
                                                resultMap.set(key, prd);
                                            }
                                        }
                                    }
                                }
                                var result = [];
                                resultMap.forEach(function (value, key, map) {
                                    console.log(key);
                                    var tempValue = {
                                        "rt": value["rt"],
                                        "rtdir": value["rtdir"],
                                        "stpnm": value["stpnm"],
                                        "prdctdn": value["prdctdn"],
                                        "des": value["des"].toUpperCase()
                                    };
                                    result.push(tempValue);
                                    console.log(value["rt"]);
                                    console.log(value["rtdir"]);
                                    console.log(value["stpnm"]);
                                    console.log(value["prdctdn"]);
                                });
                                main.resultItem = result;
                                //refresh the page
                                main.cd.detectChanges();
                            });
                        }, 100 * 1000);
                        //get request buses List
                        var requestList = [];
                        for (var j = 0, len = stopIds.length; j < len; j++) {
                            var getTemp = _this.idsService.getBusResults(stopIds[j]);
                            requestList.push(getTemp);
                        }
                        //get the bus information which has the nearest location
                        __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].forkJoin(requestList)
                            .subscribe(function (data) {
                            var resultMap = new Map();
                            for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                                var dataItem = data_3[_i];
                                var prds = dataItem["bustime-response"]["prd"];
                                if (prds != null && prds.length > 0) {
                                    for (var _a = 0, prds_2 = prds; _a < prds_2.length; _a++) {
                                        var prd = prds_2[_a];
                                        //find the nearest bus
                                        var key = prd["rt"] + prd["rtdir"];
                                        if (!resultMap.has(key)) {
                                            resultMap.set(key, prd);
                                        }
                                    }
                                }
                            }
                            var result = [];
                            var busMap = new Map();
                            resultMap.forEach(function (value, key, map) {
                                console.log(key);
                                var tempValue = {
                                    "rt": value["rt"],
                                    "rtdir": value["rtdir"],
                                    "stpnm": value["stpnm"],
                                    "prdctdn": value["prdctdn"],
                                    "des": value["des"].toUpperCase()
                                };
                                result.push(tempValue);
                                console.log(value["rt"]);
                                console.log(value["rtdir"]);
                                console.log(value["stpnm"]);
                                console.log(value["prdctdn"]);
                            });
                            _this.resultItem = result;
                            //refresh the page
                            _this.cd.detectChanges();
                            console.log(_this.resultItem);
                        });
                    });
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("map"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/blutory/Documents/Ebiz_Classes/Task-13/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!--show the map-->\n  <div #map id="map"></div>\n  <div>\n    <ion-list *ngIf="resultItem">\n      <ion-item class="itemBus" *ngFor="let res of resultItem">\n        <h1>{{ res.rt }}</h1>\n        <h3><ion-icon name="arrow-dropright-circle"></ion-icon>&nbsp;{{ res.rtdir }} {{ res.des }}</h3>\n        <span>{{ res.stpnm }}</span>\n        <ion-note item-right class="note">\n          <h2>{{ res.prdctdn }}</h2>\n          <h3>minutes</h3>\n        </ion-note>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/blutory/Documents/Ebiz_Classes/Task-13/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3__app_services_getBusId__["a" /* busIdsService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addLocation_addLocation__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MarkPage = /** @class */ (function () {
    function MarkPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    MarkPage.prototype.ionViewDidLoad = function () {
    };
    MarkPage.prototype.loadLocations = function () {
        if (localStorage.getItem("locations") != null) {
            this.marksLocation = localStorage.getItem("locations");
        }
        if (localStorage.getItem("transitLines") != null) {
            this.transitLines = localStorage.getItem("transitLines");
        }
    };
    MarkPage.prototype.locationSelected = function (location) {
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    MarkPage.prototype.addLocation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addLocation_addLocation__["a" /* AddLocationPage */]);
    };
    MarkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mark',template:/*ion-inline-start:"/Users/blutory/Documents/Ebiz_Classes/Task-13/src/pages/mark/mark.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Mark\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-list>\n      <ion-item>\n      <h4 class="titleFont">My Marks</h4>\n      </ion-item>\n\n\n    <ion-item *ngFor="let location of marksLocation">\n      <ion-note item-left>\n        <ion-icon md="md-home"></ion-icon>\n      </ion-note>\n      <h2>&nbsp;{{ location.title }} </h2>\n      <h3 class="name"> &nbsp;{{ location.name }} </h3>\n      <ion-note item-right >\n        <button (click)="locationSelected(location)"> Edit </button>\n      </ion-note>\n    </ion-item>\n\n        <button ion-item (click)="addLocation()" class="button">Add Location...</button>\n    </ion-list>\n\n\n  <ion-list class="list2">\n    <ion-item>\n      <h4 class="titleFont">My Transit Lines</h4>\n    </ion-item>\n    <ion-item class="listItem">\n      <span class="spanFont">71D</span>\n      <ion-note item-right>\n        <ion-icon ios="ios-star" md="md-star"></ion-icon>\n      </ion-note>\n    </ion-item>\n    <ion-item class="listItem">\n      <span class="spanFont">71D</span>\n      <ion-note item-right>\n        <ion-icon ios="ios-star" md="md-star"></ion-icon>\n      </ion-note>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/blutory/Documents/Ebiz_Classes/Task-13/src/pages/mark/mark.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MarkPage);
    return MarkPage;
}());

//# sourceMappingURL=mark.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddLocationPage = /** @class */ (function () {
    function AddLocationPage(navCtrl, navParams, geo, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geo = geo;
        this.alertCtrl = alertCtrl;
    }
    AddLocationPage.prototype.ionViewDidLoad = function () {
        this.locationInput = document.getElementById("locationInput");
        this.load();
    };
    AddLocationPage.prototype.load = function () {
        //set the map
        if (localStorage.getItem("position") != null) {
            var main_1 = this;
            var position = localStorage.getItem("position").split(",");
            var latLon = new google.maps.LatLng(position[0], position[1]);
            var mapOption = {
                center: latLon,
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            //set the map
            //this.map = new google.maps.Map(this.mapElement.nativeElement, mapOption);
            //this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(this.locationInputElement);
            //set the autoComplete
            var locationInput = this.locationInput.getElementsByTagName('input')[0];
            var locationAutocomplete_1 = new google.maps.places.Autocomplete(locationInput);
            locationAutocomplete_1.addListener('place_changed', function () {
                main_1.locationObject = locationAutocomplete_1.getPlace();
                var lat = main_1.locationObject.geometry.location;
                //main.map.setCenter({ lat: yourLat, lng: yourLng })
            });
        }
    };
    AddLocationPage.prototype.saveLocation = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log(data.title);
                        var temp = {
                            "title": data.title,
                            "name": ""
                        };
                        if (localStorage.getItem("locations") != null) {
                        }
                        else {
                        }
                        _this.navCtrl.pop();
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("locationInput"),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], AddLocationPage.prototype, "locationInputElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("map"),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _b || Object)
    ], AddLocationPage.prototype, "mapElement", void 0);
    AddLocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addLocation',template:/*ion-inline-start:"/Users/blutory/Documents/Ebiz_Classes/Task-13/src/pages/addLocation/addLocation.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Add Location\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <!--show the map-->\n  <div #locationInput>\n    <ion-input  type="text"  id="locationInput" placeholder="Location" class="locationInput"></ion-input>\n  </div>\n  <!--<div #map id="map"></div>-->\n  <div>\n    <button ion-button  (click)="saveLocation()" block>Save This Location</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/blutory/Documents/Ebiz_Classes/Task-13/src/pages/addLocation/addLocation.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object])
    ], AddLocationPage);
    return AddLocationPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=addLocation.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(356);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_nearStops_nearStops__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_search_search__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_direction_direction__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_mark_mark__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_addLocation_addLocation__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_nearStops_nearStops__["a" /* nearStopsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_direction_direction__["a" /* DirectionPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_mark_mark__["a" /* MarkPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_addLocation_addLocation__["a" /* AddLocationPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_nearStops_nearStops__["a" /* nearStopsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_direction_direction__["a" /* DirectionPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_mark_mark__["a" /* MarkPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_addLocation_addLocation__["a" /* AddLocationPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_nearby__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_getBusId__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/blutory/Documents/Ebiz_Classes/Task-13/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/blutory/Documents/Ebiz_Classes/Task-13/src/app/app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_nearby__["a" /* nearBySerivce */], __WEBPACK_IMPORTED_MODULE_6__services_getBusId__["a" /* busIdsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nearBySerivce; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var nearBySerivce = /** @class */ (function () {
    function nearBySerivce(http) {
        this.http = http;
        this.baseUrl = "http://realtime.portauthority.org/bustime/api/v2/getpredictions?key=rEn9KzMCKtNEYfEbGucMDfRUr&format=json&localestring=en_US&stpid=";
    }
    nearBySerivce.prototype.getResults = function (stopId) {
        var requestUrl = this.baseUrl + stopId;
        return this.http.get(requestUrl)
            .map(function (res) { return res.json(); });
    };
    nearBySerivce = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], nearBySerivce);
    return nearBySerivce;
}());

//# sourceMappingURL=nearby.js.map

/***/ })

},[351]);
//# sourceMappingURL=main.js.map