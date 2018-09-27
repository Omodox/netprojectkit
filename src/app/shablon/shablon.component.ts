
import { Component, OnInit, OnChanges } from '@angular/core';
import { AllHttpService } from '../all-http.service';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
  textEditor;
  selectEditor = {
    fild: '',
    show: false,
    page: '',
    pageFild: '',
  };
  selectEditorArray;

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
    this.allHttpServise.createRender(page.id).subscribe(res => {
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
    if (fild.type === 'select') {
      console.log('select');
    }
    if (vals === undefined) {
      return '--';
    }
    const res = vals.find(x => x.fild === fild.id);
    if (res) { return res.val; } else {
      return '--';
    }
  }

  pageName(fild, vals) {
    if (vals === undefined) {
      return '--';
    }
    const res = vals.find(x => x.fild === fild.id);
    if (res) {
      const item = res;
      if (item.pageParent) {
      return item.pageParent.name;
      } } else {
      return '--';
    }
  }

  changeParent(fild, vals, pageId) {
    console.log(fild, vals, pageId);
    let fildId = '';
    if (vals) {
    const res = vals.find(x => x.fild === fild.id);
    if (res) {
    fildId = res.id;
    } else {
      fildId = '';
    }
    } else {
     fildId = '';
    }
    this.selectEditor.show = true;
    this.selectEditor.fild = fildId;
    this.selectEditor.pageFild = fild.id;
    this.selectEditor.page = pageId;
    this.allHttpServise.getPagesPerShablon(fild.parent).subscribe(res2 => {
      console.log(res2);
      this.selectEditorArray = res2;
    });
  }

  fildValueCode(fild, vals) {
    if (fild.type === 'seltct') {
    }
    const res = vals.find(x => x.fild === fild.id);
    if (res) { return res.val.length; } else {
      return '--';
    }
  }

  fildTextValueLenght(fild, vals) {

    const res = vals.find(x => x.fild === fild.id);
    return res.val.length;
  }


  fildTextValue(fild, vals) {

    const res = vals.find(x => x.fild === fild.id);
    return res.val;
  }

  fildIdValue(fild, vals) {
    const res = vals.find(x => x.fild === fild.id);
    return res.id;
  }


  openEditor(fild, page) {
    console.log(fild, page);
    this.textEditor = page;
    this.textEditor.show = true;
    this.textEditor.key = this.fildIdValue(fild, page.vals);
    this.textEditor.toEdit = this.fildTextValue(fild, page.vals);
  }

  sendText(textForm) {
    console.log(this.textEditor);
    this.allHttpServise.updateVal({ val: textForm.innerText }, this.textEditor.key).subscribe(result => {
      console.log('Server: ', result);
      this.getAllfromServer();
      this.textEditor = null;
    });
  }

  updateFild(item, fild, vals, pageId) {
    if (vals === undefined) {
      console.log(item.innerText, fild.id, pageId);
      this.allHttpServise.CreateVal({ val: item.innerText, page : pageId , fild : fild.id } ).subscribe(result => {
        console.log('Server: ', result);
      });  return true;
    }
    const res = vals.find(x => x.fild === fild.id);

    if (res === undefined) {
      console.log(item.innerText, fild.id, pageId);
      this.allHttpServise.CreateVal({ val: item.innerText, page : pageId , fild : fild.id } ).subscribe(result => {
        console.log('Server: ', result);
      });
    } else
    if (item.innerText !== this.valbuffer) {
      this.allHttpServise.updateVal({ val: item.innerText }, res.id).subscribe(result => {
        console.log('Server: ', result);
      });
    }
  }

  updateFildSelect(val, id, pageId, pageFild) {
    if (id === '') {
      // console.log(val, id, pageId, pageFild);
      this.allHttpServise.CreateVal({ val: val, page : pageId , fild : pageFild } ).subscribe(result => {
        console.log('Server: ', result);
        this.selectEditor.show = false;
        this.getAllfromServer();
      });
    } else {
      this.allHttpServise.updateVal({ val: val }, id).subscribe(result => {
        console.log('Server: ', result);
        this.selectEditor.show = false;
        this.getAllfromServer();
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
    console.log(fild);
    console.log('Buffer', this.valbuffer);
    if (item.innerText !== this.valbuffer) {
      this.allHttpServise.updatePageVal({ val: item.innerText, fild: fild }, pageId).subscribe(result => {
        console.log('Server: ', result);
      });
    }
  }



}
