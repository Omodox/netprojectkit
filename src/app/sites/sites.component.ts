import { Component, OnInit } from '@angular/core';
import { AllHttpService } from '../all-http.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {

  sites;

  constructor(
    private allHttpServise: AllHttpService
  ) { }

  ngOnInit() {

    this.allHttpServise.getSites().subscribe(res => {
      console.log(res); this.sites = res;
    });
  }

}
