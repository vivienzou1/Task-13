import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class nearBySerivce {

  baseUrl: any;

  constructor(public http:Http){

    this.baseUrl = "http://realtime.portauthority.org/bustime/api/v2/getpredictions?key=rEn9KzMCKtNEYfEbGucMDfRUr&format=json&localestring=en_US&stpid=";
  }

  getResults(stopId) {
    let requestUrl = this.baseUrl + stopId;
    return this.http.get(requestUrl)
      .map(res => res.json());
  }
}
