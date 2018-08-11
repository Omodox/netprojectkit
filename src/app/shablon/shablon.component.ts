
import { Component, OnInit } from '@angular/core';
import { AllHttpService } from '../all-http.service';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-shablon',
  templateUrl: './shablon.component.html',
  styleUrls: ['./shablon.component.css']
})
export class ShablonComponent implements OnInit {

  shablonId;
  shablon;
  filds;
  pages;

  constructor(
    private allHttpServise: AllHttpService,
    private activateRoute: ActivatedRoute,
    public globalServise: GlobalService
  ) { }

  ngOnInit() {

    this.activateRoute.params.subscribe(res => {
      this.shablonId = res.id;
      console.log(this.shablonId);
    });

    this.allHttpServise.getShablon(this.shablonId).subscribe(res => {
      console.log(res);
      this.shablon = res;
      this.filds = this.shablon[0].filds;
      this.pages = this.shablon[0].pages;
      console.log(this.pages);
    });

  }
}
