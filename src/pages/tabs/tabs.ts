import { Component } from '@angular/core';

import { nearStopsPage } from '../nearStops/nearStops';
import { SearchPage } from '../search/search';
import { HomePage } from '../home/home';
import { MarkPage } from "../mark/mark";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SearchPage;
  tab2Root = nearStopsPage;
  tab3Root = HomePage;
  tab4Root = MarkPage;
  constructor() {

  }


}
