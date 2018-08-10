import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class HttpLoginService {

  server = 'https://netkit.xyz/api/';

  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
  ) { }

  getProfile() {
       return this.http.get(`${this.server}?set=pages`);
  }

}
