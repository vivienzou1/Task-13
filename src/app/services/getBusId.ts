import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class busIdsService {

  baseUrl: any;
  baseUrl2: any;

  constructor(public http:Http){
    this.baseUrl = "http://127.0.0.1:5000/getBusStopIds";
    this.baseUrl2 = "http://realtime.portauthority.org/bustime/api/v2/getpredictions?key=rEn9KzMCKtNEYfEbGucMDfRUr&format=json&localestring=en_US&stpid=";
  }


  getResults(requestParam:String) {
    let req = {
      "placeName" : requestParam
    }
    return this.http.post(this.baseUrl,req)
      .map(data => data.json());

  }

  getBusResults(stopId) {
    let requestUrl = this.baseUrl2 + stopId;
    return this.http.get(requestUrl)
      .map(res => res.json());
  }}
