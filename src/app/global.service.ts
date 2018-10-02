import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class GlobalService {

  constructor() { }

  modal;
   modalStatus:  EventEmitter<any> = new EventEmitter();
  textEditor = {
    show : false,
    text : [],
    form : '',
    key : '',
    toEdit:  '',
    thisEdit: false,
   fildtoUpdate: <any>'',
  };

  album = {
    show : false,
    text : [],
    form : '',
    key : '',
  };

  myName;
  myStatus;

}
