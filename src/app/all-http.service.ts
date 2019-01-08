import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class AllHttpService {


  server = 'https://netwebkit.com/api/';
  token;

  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
  ) { }

  getToken() {
   return   localStorage.getItem('token');
  }

  getPages(id) {
       return this.http.get(`${this.server}?set=pages&id=${id}`);
  }

  getAlbums() {
       return this.http.get(`${this.server}?set=album&action=get`);
  }

  getShablon(id) {
       return this.http.get(`${this.server}?set=shablon&id=${id}`);
  }


  createRender(id) {
    return this.http.get(`${this.server}?set=render&id=${id}`);
  }


  getShablons(id) {
       return this.http.get(`${this.server}?set=shablons&id=${id}`);
  }

  getFilds(id) {
       return this.http.get(`${this.server}?set=filds&id=${id}`);
  }

  getPagesPerShablon(id) {
       return this.http.get(`${this.server}?set=pages&order=shablon&id=${id}`);
  }

  getPagesPerId(id) {
       return this.http.get(`${this.server}?set=pages&order=id&id=${id}`);
  }


  updateVal(body, id) {
       return this.http.post(`${this.server}?set=val&order=update&id=${id}`, body);
  }

  CreateValString(body) {
       return this.http.post(`${this.server}?set=val&order=create&page=${body.page}`, body);
  }

  updatePageVal(body, id) {
       return this.http.post(`${this.server}?set=pageval&order=update&id=${id}`, body);
  }

  createSite(body) {
       return this.http.post(`${this.server}?set=site&action=create`, body);
  }

  createVal(body) {
       return this.http.post(`${this.server}?set=create_val`, body);
  }


  createAlbum(body) {
       return this.http.post(`${this.server}?set=album&action=create`, body);
  }

  createShablon(body) {
       return this.http.post(`${this.server}?set=shablon&action=create`, body);
  }

  createFild(body) {
       return this.http.post(`${this.server}?set=fild&action=create`, body);
  }
  createPage(body) {
       return this.http.post(`${this.server}?set=page&action=create`, body);
  }

  statusPage(body) {
       return this.http.get(`${this.server}?set=page&action=status&id=${body.id}&sts=${body.sts}`);
  }

  deletePage(body) {
       return this.http.get(`${this.server}?set=page&action=status&id=${body.id}&sts=0`);
  }





  getSites() {
       return this.http.get(`${this.server}?set=sites`);
  }


}
