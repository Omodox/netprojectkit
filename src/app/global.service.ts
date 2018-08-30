import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';

@Injectable()
export class GlobalService {

  constructor() { }

  modal;
  modalStatus = new EventEmitter();
  textEditor = {
    show : false,
    text : [],
    form : '',
    key : '',
  };

  myName;
  myStatus;

}
