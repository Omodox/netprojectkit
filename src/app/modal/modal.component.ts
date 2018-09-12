import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { AllHttpService } from '../all-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  filds;

  constructor(
    private allHttpServise: AllHttpService,
    public globalServise: GlobalService,
    private router: Router
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
            this.globalServise.textEditor.text[this.globalServise.textEditor.key] = '';
            console.log('create page: ', res);
          });
        } break;
        case 'album': {
          this.allHttpServise.createAlbum(modalForm.value).subscribe(res => {
            console.log('create page: ', res);
          });
        } break;

      }
    }


    this.globalServise.modalStatus.emit('close');
    this.globalServise.modal = false;
  }


  doUrl(fild){
    console.log();
    if (fild.type === 'url') {
     fild.value =  this.filds[1].value.toLowerCase();
     fild.value = this.cyrill_to_latin(fild.value);
     fild.value = fild.value.replace(/ /g, "-");
    }
  }

arrru = new Array ('Я','я','Ю','ю','Ч','ч','Ш','ш','Щ','щ','Ж','ж','А','а','Б','б','В','в','Г','г','Д','д','Е','е','Ё','ё','З','з','И','и','Й','й','К','к','Л','л','М','м','Н','н', 'О','о','П','п','Р','р','С','с','Т','т','У','у','Ф','ф','Х','х','Ц','ц','Ы','ы','Ь','ь','Ъ','ъ','Э','э');
arren = new Array ('Ya','ya','Yu','yu','Ch','ch','Sh','sh','Sh','sh','Zh','zh','A','a','B','b','V','v','G','g','D','d','E','e','E','e','Z','z','I','i','J','j','K','k','L','l','M','m','N','n', 'O','o','P','p','R','r','S','s','T','t','U','u','F','f','H','h','C','c','Y','y','`','`','\'','\'','E', 'e');


 cyrill_to_latin(text){
	for(var i=0; i<this.arrru.length; i++){
		var reg = new RegExp(this.arrru[i], "g");
		text = text.replace(reg, this.arren[i]);
    }
	return text;
}



  ngOnInit() {

    this.globalServise.modalStatus.emit('open Modal Emit');

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

    if (this.globalServise.modal.create === 'album') {
      this.filds = [
        { name: 'name' }
      ];
    }

    if (this.globalServise.modal.create === 'page') {
      this.filds = [
        { name: 'shablon', value: this.globalServise.modal.shablon, fixed: true },
        { name: 'name', },
        { name: 'url', type : 'url' },
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
