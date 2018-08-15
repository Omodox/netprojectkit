import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  onFileChanged(event) {
    const file = event.target.files[0];
    console.log(file);
  }

  ngOnInit() {
  }

}
