import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { ActivatedRoute } from '@angular/router';
import { AllHttpService } from '../all-http.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {


  albums;

  constructor(
    private allHttpServise: AllHttpService,
    private activateRoute: ActivatedRoute,
    public globalServise: GlobalService
  ) { }



  onFileChanged(event) {
    const file = event.target.files[0];
    console.log(file);
  }

  ngOnInit() {

    this.allHttpServise.getAlbums().subscribe(res => {
      console.log(res);
      this.albums = res;
    });
  }

}
