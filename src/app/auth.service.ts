
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {


  server = 'https://netwebkit.com/api/';

  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
  ) { }

  getToken() {
    console.log('res');
  }

  // getPages(id) {
  //      return this.http.get(`${this.server}?set=pages&id=${id}`);
  // }

}
