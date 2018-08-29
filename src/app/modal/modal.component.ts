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
    console.log('firt step : ', modalForm.value, 'Create command: ', this.globalServise.modal.create);
    if (this.globalServise.modal.create) {
      switch (this.globalServise.modal.create) {

        case 'site': {
          console.log('send params on create new site');
          this.allHttpServise.createSite(modalForm.value).subscribe(res => {
            console.log(res);
          });
        } break;
        case 'shablon': {
          this.allHttpServise.createShablon(modalForm.value).subscribe(res => {
            console.log('create shablon: ', res);
          });
        } break;
        case 'fild': {
          this.allHttpServise.createFild(modalForm.value).subscribe(res => {
            console.log('create fild: ', res);
          });
        } break;

        case 'page': {
          this.allHttpServise.createPage(modalForm.value).subscribe(res => {
            console.log('create page: ', res);
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

    if (this.globalServise.modal.create === 'shablon') {
      this.filds = [
        { name: 'site', value: this.globalServise.modal.site, fixed: true },
        { name: 'name' }
      ];
    }

    if (this.globalServise.modal.create === 'fild') {
      this.filds = [
        { name: 'shablon', value: this.globalServise.modal.shablon, fixed: true },
        { name: 'name', },
        { name: 'type', value: 'string' },
        { name: 'placeholder' },
        { name: 'parent', value: 0, }
      ];
    }

    if (this.globalServise.modal.create === 'page') {
      this.filds = [
        { name: 'shablon', value: this.globalServise.modal.shablon, fixed: true },
        { name: 'parent', value: 0, }
      ];
      this.allHttpServise.getFilds(this.globalServise.modal.shablon).subscribe(res => {
        let newFilds;
        newFilds = res;
        newFilds.forEach(element => {
          // console.log(element);
          if (element.type === 'select') {
            this.allHttpServise.getPagesPerShablon(element.parent).subscribe(res2 => {
              console.log(res2);
              element.list = res2;
              // tslint:disable-next-line:max-line-length
              this.filds.push({ name: element.name, fildId: element.id, value: element.placeholder, type: element.type, list : element.list });
            });
          } else {
          this.filds.push({ name: element.name, fildId: element.id, value: element.placeholder, type: element.type, list : element.list });
          }
        });
        console.log(this.filds);
      });
    }


  }

}
