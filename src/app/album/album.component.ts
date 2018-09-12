import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { AllHttpService } from '../all-http.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor(
    private allHttpServise: AllHttpService,
    public globalServise: GlobalService,
    private http: HttpClient,
  ) { }


  text;
  uploadData;


  ngOnInit() {
    console.log(this.globalServise.textEditor);

  this.text = this.globalServise.textEditor.text[this.globalServise.textEditor.key];

  }


  onFileChanged(event) {
    const file = event.target.files[0];
    console.log(file);
    this.uploadData = file;

  }

  onUpload() {
      const formData = new FormData();
      formData.append('data', JSON.stringify({
          test: 'test'
      }));
      formData.append('file', this.uploadData);

      const headers = new HttpHeaders().set('Content-Type', []);

      // responseType 'text' is necessary for IE
      return this.http.post('https://netkit.xyz/api/?set=load_photo', formData, {
          headers,
          responseType: 'text'
      }).subscribe(res => {
        console.log(res);

      });

  }



  sendText(textForm) {
    this.globalServise.textEditor.show = false;
    this.globalServise.textEditor.text[this.globalServise.textEditor.key] = textForm.innerHTML;
    console.log(this.globalServise.textEditor);
  }

}
