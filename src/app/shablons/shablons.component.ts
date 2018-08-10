import { Component, OnInit } from '@angular/core';
import { AllHttpService } from '../all-http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shablons',
  templateUrl: './shablons.component.html',
  styleUrls: ['./shablons.component.css']
})
export class ShablonsComponent implements OnInit {

  siteId;
  shablons;

  constructor(
    private allHttpServise: AllHttpService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {


    this.activateRoute.params.subscribe(res => {
     this.siteId = res.id;
   });
     this.allHttpServise.getShablons(this.siteId).subscribe(res => {
      console.log(res);
       this.shablons = res;
     });
   }
}


