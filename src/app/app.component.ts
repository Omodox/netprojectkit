import { Component, OnInit } from '@angular/core';
import { GlobalService } from './global.service';
import { AllHttpService } from './all-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';


  constructor(
    private allHttpServise: AllHttpService,
    public globalServise: GlobalService
  ) { }


  ngOnInit() {

    this.globalServise.myStatus  = localStorage.getItem('sts');
    this.globalServise.myName  = localStorage.getItem('name');

  }


}
