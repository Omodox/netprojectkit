import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { AllHttpService } from '../all-http.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  filds;

  constructor(
    private allHttpServise: AllHttpService,
    public globalServise: GlobalService
  ) { }

  send(modalForm) {
    console.log(modalForm.value);
    if (this.globalServise.modal.create) {

      switch (this.globalServise.modal.create) {

        case 'site': {
          console.log('send params on create new site');
          this.allHttpServise.createSite(modalForm.value).subscribe(res => {
            console.log(res);
          });
        } break;

      }
    }



    this.globalServise.modal = false;
  }


  ngOnInit() {

    if (this.globalServise.modal.create === 'site') {
      this.filds = [
        { name: 'name' },
        { name: 'url' }
      ];
    }


  }

}
