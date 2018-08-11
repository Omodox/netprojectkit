import { Component } from '@angular/core';
import { GlobalService } from './global.service';
import { AllHttpService } from './all-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  constructor(
    private allHttpServise: AllHttpService,
    public globalServise: GlobalService
  ) { }

}
