import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { AllHttpService } from '../all-http.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor(
    private allHttpServise: AllHttpService,
    public globalServise: GlobalService
  ) { }


  text;
  selectedFile: File;


  ngOnInit() {
    console.log(this.globalServise.textEditor);

  this.text = this.globalServise.textEditor.text[this.globalServise.textEditor.key];

  }


  onFileChanged(event) {
    // const file = event.target.files[0];
  }

  // onUpload() {
  //   this.http.post('my-backend.com/file-upload', uploadData, {
  //     reportProgress: true,
  //     observe: 'events'
  //   })
  //     .subscribe(event => {
  //       console.log(event); // handle event here
  //     });
  // }



  sendText(textForm) {
    this.globalServise.textEditor.show = false;
    this.globalServise.textEditor.text[this.globalServise.textEditor.key] = textForm.innerHTML;
    console.log(this.globalServise.textEditor);
  }

}
