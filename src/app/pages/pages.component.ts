import { Component, OnInit } from '@angular/core';
import { AllHttpService } from '../all-http.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  siteId;
  pages;

  constructor(
    private allHttpServise: AllHttpService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {


   this.activateRoute.params.subscribe(res => {
    this.siteId = res.id;
  });

    this.allHttpServise.getPages(this.siteId).subscribe(res => {
      // console.log(res);
      this.pages = res;
    });
  }

}
