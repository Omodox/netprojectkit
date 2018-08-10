import { Component, OnInit } from '@angular/core';
import { AllHttpService } from '../all-http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(
    private allHttpServise: AllHttpService,
    private activateRoute: ActivatedRoute
  ) { }

  siteId;
  pages;

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


