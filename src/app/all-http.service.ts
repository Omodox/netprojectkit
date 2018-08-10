import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class AllHttpService {

  server = 'https://netkit.xyz/api/';

  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
  ) { }

  getPages(id) {
       return this.http.get(`${this.server}?set=pages&id=${id}`);
  }

  getShablon(id) {
       return this.http.get(`${this.server}?set=shablon&id=${id}`);
  }



  getSites() {
       return this.http.get(`${this.server}?set=sites`);
  }


}
