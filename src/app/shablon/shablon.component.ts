
import { Component, OnInit, OnChanges } from '@angular/core';
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
  SubFromPlayerToRemoveAfterDesctroy;

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

    this.getAllfromServer();

    this.SubFromPlayerToRemoveAfterDesctroy = this.globalServise.modalStatus.subscribe(res => {
      if (res === 'close') { this.getAllfromServer(); }
    });


  }


  getAllfromServer() {
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

  delete(page) {
    this.allHttpServise.deletePage({ id: page.id }).subscribe(res => {
      console.log('Server: ', res);
      this.getAllfromServer();
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
      this.allHttpServise.updateVal({ val: item.innerText }, res.id).subscribe(result => {
        console.log('Server: ', result);
      });
    }
  }

  getOptions(item, fild, vals) {
    const res = vals.find(x => x.fild === fild.id);
    // console.log(res, fild.parent);
    // let array;
    // this.allHttpServise.getPagesPerShablon(3).subscribe(res2 => {
    //   console.log('back for server', res2);
    //   array = res2;
    // });
    // return [1, 2];
  }

  updatePageFild(item, pageId, fild) {
    console.log(item.innerText);
    console.log(pageId);
    if (item.innerText !== this.valbuffer) {
      this.allHttpServise.updatePageVal({ val: item.innerText, fild: fild }, pageId).subscribe(result => {
        console.log('Server: ', result);
      });
    }
  }



}
