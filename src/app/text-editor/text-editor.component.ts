import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { AllHttpService } from '../all-http.service';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {

  constructor(
    private allHttpServise: AllHttpService,
    public globalServise: GlobalService
  ) { }


  text;


  ngOnInit() {
    console.log(this.globalServise.textEditor);

  this.text = this.globalServise.textEditor.text[this.globalServise.textEditor.key];

  }
  sendText(textForm) {
    this.globalServise.textEditor.show = false;
    this.globalServise.textEditor.text[this.globalServise.textEditor.key] = textForm.innerHTML;
    console.log(this.globalServise.textEditor);
  }


}
