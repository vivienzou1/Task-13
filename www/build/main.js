webpackJsonp([0],{

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return busIdsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(135);
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
        this.baseUrl = "http://127.0.0.1:5000/getBusStopIds";
        this.baseUrl2 = "http://realtime.portauthority.org/bustime/api/v2/getpredictions?key=rEn9KzMCKtNEYfEbGucMDfRUr&format=json&localestring=en_US&stpid=";
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__nearStops_nearStops__["a" /* nearStopsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/blutory/Documents/Ebiz_Classes/Task-13/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Stops" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Search" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/blutory/Documents/Ebiz_Classes/Task-13/src/pages/tabs/tabs.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_getBusId__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__ = __webpack_require__(137);
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
            var image_1 = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
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
                                                    "prdctdn": prd["prdctdn"]
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
                                            "prdctdn": prd["prdctdn"]
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
                                    "prdctdn": prd["prdctdn"]
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
                                "prdctdn": prd["prdctdn"]
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
            selector: 'page-nearStops',template:/*ion-inline-start:"/Users/blutory/Documents/Ebiz_Classes/Task-13/src/pages/nearStops/nearStops.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Bus Stops\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div #map2 id="map2"></div>\n  <div class="nearbyList">\n    <ion-list *ngIf="resultItem">\n      <ion-item class="itemResult" *ngFor="let res of resultItem">\n        <h4>{{ res.stopId }} &nbsp;{{ res.stopName }}</h4>\n        <ion-item  class="itemBus" *ngFor="let bus of res.tempBuses">\n          <h4>{{ bus.rt }}</h4>\n          <h4><ion-icon name="arrow-dropright-circle"></ion-icon>&nbsp;{{ bus.rtdir }}</h4>\n          <ion-note item-right class="note">\n            <h3>{{ bus.prdctdn }}</h3>\n            <h3>minutes</h3>\n          </ion-note>\n        </ion-item>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/blutory/Documents/Ebiz_Classes/Task-13/src/pages/nearStops/nearStops.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_services_getBusId__["a" /* busIdsService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__direction_direction__ = __webpack_require__(347);
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
    function SearchPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        this.originInput = document.getElementById("originInput");
        this.destinationInput = document.getElementById("destinationInput");
    };
    SearchPage.prototype.ionViewWillEnter = function () {
        this.loadMap();
    };
    SearchPage.prototype.loadMap = function () {
        //set the autoComplete
        var originInput = this.originInput.getElementsByTagName('input')[0];
        var destinationInput = this.destinationInput.getElementsByTagName('input')[0];
        var originAutocomplete = new google.maps.places.Autocomplete(originInput);
        var destinationAutocomplete = new google.maps.places.Autocomplete(destinationInput);
        var main = this;
        originAutocomplete.addListener('place_changed', function () {
            main.originObject = originAutocomplete.getPlace();
        });
        destinationAutocomplete.addListener('place_changed', function () {
            main.destinationObject = destinationAutocomplete.getPlace();
        });
    };
    SearchPage.prototype.setOriginAndDestination = function () {
        if (!this.originObject || !this.destinationObject) {
            return;
        }
        var params = {
            "originObject": this.originObject,
            "destinationObject": this.destinationObject,
            "preference": "LESS_WALKING"
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__direction_direction__["a" /* DirectionPage */], params);
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/blutory/Documents/Ebiz_Classes/Task-13/src/pages/search/search.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Search</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!--submit the form-->\n  <form (submit) = "setOriginAndDestination()">\n  <ion-list>\n    <!--originInput-->\n    <ion-item>\n      <ion-label floating>Origin</ion-label>\n      <ion-input #originInput type="text"  id="originInput"></ion-input>\n    </ion-item>\n    <!--destinationInput-->\n    <ion-item>\n    <ion-label floating>Destination</ion-label>\n    <ion-input #destinationInput type="text"  id="destinationInput"></ion-input>\n    </ion-item>\n    <!---->\n    <!--<ion-item>-->\n      <!--<ion-label fixed>RoutingPreference</ion-label>-->\n      <!--<ion-select [(ngModel)]="preference" name="preference">-->\n        <!--<ion-option value="FEWER_TRANSFERS">fewer transfers</ion-option>-->\n        <!--<ion-option value="LESS_WALKING">Less walking</ion-option>-->\n      <!--</ion-select>-->\n    <!--</ion-item>-->\n  </ion-list>\n  <button ion-button type="submit"  block>submit</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/blutory/Documents/Ebiz_Classes/Task-13/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(151);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_getBusId__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__ = __webpack_require__(137);
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
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.idsService = idsService;
        this.cd = cd;
        //this.loadMap();
        this.loadMap();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        //this.loadMap();
    };
    HomePage.prototype.ngOnInit = function () {
        //this.loadMap();
    };
    HomePage.prototype.loadMap = function () {
        var _this = this;
        //get the position
        //then((), ())
        var main = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLon = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            //add position to cache
            localStorage.setItem("position", position.coords.latitude + "," + position.coords.longitude);
            console.log(position.coords.latitude + "---" + position.coords.longitude);
            var mapOption = {
                center: latLon,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            //set the map
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOption);
            //set the marker
            var marker = new google.maps.Marker({
                map: _this.map,
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
            var service = new google.maps.places.PlacesService(_this.map);
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
                                        "prdctdn": value["prdctdn"]
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
                        }, 8 * 1000);
                        //get request buses List
                        var requestList = [];
                        for (var j = 0, len = stopIds.length; j < len; j++) {
                            var getTemp = _this.idsService.getBusResults(stopIds[j]);
                            requestList.push(getTemp);
                        }
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
                            resultMap.forEach(function (value, key, map) {
                                console.log(key);
                                var tempValue = {
                                    "rt": value["rt"],
                                    "rtdir": value["rtdir"],
                                    "stpnm": value["stpnm"],
                                    "prdctdn": value["prdctdn"]
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
                    //get busStopIds
                    // this.idsService.getResults(nearByBusStopsStr.toString()).subscribe(result => {
                    //   let stopIds = result['stopIds'];
                    //   console.log(stopIds);
                    //   //get rts
                    //   let requestList = []
                    //   for(let j = 0,len=stopIds.length; j < len; j++) {
                    //       let getTemp = this.nearService.getResults(stopIds[j]);
                    //       requestList.push(getTemp);
                    //   }
                    //   Observable.forkJoin(requestList)
                    //     .subscribe(data => {
                    //         let resultItem = [];
                    //         for (let dataItem of data) {
                    //           let prds = dataItem["bustime-response"]["prd"];
                    //           if (prds != null && prds.length > 0) {
                    //                for (let prd of prds) {
                    //                  let tempPrd = {
                    //
                    //                  }
                    //                  resultItem.push(prd);
                    //                  //console.log(prd["rt"]);
                    //                  //console.log(prd["rtdir"]);
                    //                  //console.log(prd["stpnm"]);
                    //                  //console.log(prd["prdctdn"]);
                    //                 }
                    //           }
                    //           console.log("hh");
                    //         }
                    //       });
                    // });
                }
            });
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("map"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/blutory/Documents/Ebiz_Classes/Task-13/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!--show the map-->\n  <div #map id="map"></div>\n  <div>\n    <ion-list *ngIf="resultItem">\n      <ion-item class="itemBus" *ngFor="let res of resultItem">\n        <h1>{{ res.rt }}</h1>\n        <h3><ion-icon name="arrow-dropright-circle"></ion-icon>&nbsp;{{ res.rtdir }}</h3>\n        <span>{{ res.stpnm }}</span>\n        <ion-note item-right class="note">\n          <h2>{{ res.prdctdn }}</h2>\n          <h3>minutes</h3>\n        </ion-note>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/blutory/Documents/Ebiz_Classes/Task-13/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3__app_services_getBusId__["a" /* busIdsService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(354);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_nearStops_nearStops__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_search_search__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_direction_direction__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(135);
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
                __WEBPACK_IMPORTED_MODULE_11__pages_direction_direction__["a" /* DirectionPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_nearStops_nearStops__["a" /* nearStopsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_direction_direction__["a" /* DirectionPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_nearby__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_getBusId__ = __webpack_require__(150);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nearBySerivce; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(135);
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

},[349]);
//# sourceMappingURL=main.js.map