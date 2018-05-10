import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { nearStopsPage } from '../pages/nearStops/nearStops';
import { SearchPage } from '../pages/search/search';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Geolocation } from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DirectionPage } from '../pages/direction/direction';
import { MarkPage } from '../pages/mark/mark';
import { HttpModule } from '@angular/http';
import { AddLocationPage } from "../pages/addLocation/addLocation";

@NgModule({
  declarations: [
    MyApp,
    nearStopsPage,
    SearchPage,
    HomePage,
    TabsPage,
    DirectionPage,
    MarkPage,
    AddLocationPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    nearStopsPage,
    SearchPage,
    HomePage,
    TabsPage,
    DirectionPage,
    MarkPage,
    AddLocationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
