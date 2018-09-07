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
  textAr;


  ngOnInit() {
    console.log(this.globalServise.textEditor);

    this.text = this.globalServise.textEditor.text[this.globalServise.textEditor.key];

    if (this.globalServise.textEditor.toEdit) {
      this.text = this.globalServise.textEditor.toEdit;
    }

  }
  sendText(textForm) {
    this.globalServise.textEditor.show = false;
    this.globalServise.textEditor.text[this.globalServise.textEditor.key] = textForm.innerHTML;
    console.log(this.globalServise.textEditor);
    // this.globalServise.textEditor = null;
    // this.globalServise.textEditor.text[this.globalServise.textEditor.key] = '';
  }

  SaveText(textForm) {
    console.log(this.globalServise.textEditor.key);
    this.allHttpServise.updateVal({ val: textForm.innerHTML }, this.globalServise.textEditor.key).subscribe(result => {
      console.log('Server: ', result);
      this.globalServise.textEditor;
      // this.globalServise.textEditor = null;
    });
  }

  cleanText(text){
    this.text = text.innerHTML;
    let textBuffer =  this.text.replace(/(<([^>]+)>)/ig,"\n");
     let arrayOfLines = textBuffer.match(/[^\r\n]+/g);
    // console.log(arrayOfLines);
    this.textAr = arrayOfLines;
    for (let i = 0; i < this.textAr.length; i++) {
      this.textAr[i] = this.textAr[i].trim();
      const lastL = this.textAr[i][this.textAr[i].length - 1];
      const firtsL = this.textAr[i][0];
      if (lastL !== '.' && lastL !== '?' && lastL !== '!' && lastL !== ';' && lastL !== ':') {
        this.textAr[i] =  '<h2>' + this.textAr[i] + '</h2>';
    }
    // if (firtsL === '') {
    //   this.textAr[i] = '<li>' +  this.textAr[i] + '</li>';
    // }
    else {
      this.textAr[i] =  '<p>' + this.textAr[i] + '</p>';
    }
  }
  this.text = this.textAr.join('');
}





cleanText2(text){
 this.text = text.innerHTML;
  // this.text = this.text.replace(/<[^>]*>/g, '');
  this.text = this.text.replace(/div/g, "p");
  this.text = this.text.replace(/dir="ltr"/g, "");
  this.text = this.text.replace(/<\/?span[^>]*>/g, "");
  this.text = this.text.replace(/<\/?br[^>]*>/g, "");
  this.textAr = this.text.split('</p>');



  for (let i = 0; i < this.textAr.length; i++) {
    this.textAr[i] = this.textAr[i] + '</p>';

    const lastL = this.textAr[i][this.textAr[i].length - 5];
    console.log(lastL);
    this.textAr[i] = this.textAr[i].trim();
    if (lastL == ' ') {
     let textBuffer =  this.textAr[i].replace(/(<([^>]+)>)/ig,"");
     textBuffer =  textBuffer.substring(0, textBuffer.length - 1);
     this.textAr[i] = '<p>' + textBuffer + '</p>';
     console.log(lastL);
    };
    console.log(lastL);
    if (lastL !== '.' && lastL !== '?' && lastL !== '!' && lastL !== ';' && lastL !== ':') {
      this.textAr[i] = this.textAr[i].replace(/p/g, "h2");
    }
    // else {
    //   let textBuffer =  this.textAr[i].replace(/(<([^>]+)>)/ig,"");
    //   this.textAr[i] = '<p>' + textBuffer + '</p>';
    // }
  }
  this.text = this.textAr.join('');
}


  
  };


