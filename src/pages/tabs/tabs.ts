import { Component } from '@angular/core';

import { nearStopsPage } from '../nearStops/nearStops';
import { SearchPage } from '../search/search';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = nearStopsPage;
  tab3Root = SearchPage;

  constructor() {

  }


}
