
import { Component, OnInit } from '@angular/core';
import { AllHttpService } from '../all-http.service';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-shablon',
  templateUrl: './shablon.component.html',
  styleUrls: ['./shablon.component.css']
})
export class ShablonComponent implements OnInit {

  shablonId;
  shablon;
  filds;
  pages;
  valbuffer;

  constructor(
    private allHttpServise: AllHttpService,
    private activateRoute: ActivatedRoute,
    public globalServise: GlobalService
  ) { }

  ngOnInit() {

    this.activateRoute.params.subscribe(res => {
      this.shablonId = res.id;
      console.log(this.shablonId);
    });

    this.allHttpServise.getShablon(this.shablonId).subscribe(res => {
      console.log(res);
      this.shablon = res;
      this.filds = this.shablon[0].filds;
      this.pages = this.shablon[0].pages;
      console.log(this.pages);
    });

  }

  changeStatus(page) {
    console.log(page);
    if (page.sts === 1 || page.sts === '1') {
      page.sts = 2;
    } else if (page.sts === 2 || page.sts === '2') {
      page.sts = 1;
    }
    this.allHttpServise.statusPage({ sts: page.sts, id: page.id }).subscribe(res => {
      console.log('Server: ', res);
    });
  }

  fildValue(fild, vals) {
    if (fild.type === 'seltct') {
      console.log('select');
    }
    const res = vals.find(x => x.fild === fild.id);
    if (res) { return res.val; } else {
      return '--';
    }
  }

  updateFild(item, fild, vals) {
    const res = vals.find(x => x.fild === fild.id);
    // console.log(item.innerText);
    // console.log(res.id);
    if (item.innerText !== this.valbuffer) {
    this.allHttpServise.updateVal({ val: item.innerText }, res.id).subscribe( result => {
      console.log('Server: ', result);
    });
    }
  }
}
