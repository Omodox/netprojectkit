import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  constructor() { }

  modal;
  textEditor = {
    show : false,
    text : [],
    form : '',
    key : '',
  };

  myName;
  myStatus;

}
