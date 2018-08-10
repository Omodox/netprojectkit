import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { HttpLoginService } from './http-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private httpLoginService: HttpLoginService,
  ) {}

  ngOnInit() {
  }

  login(req) {
    console.log(req.value);
    this.router.navigate(['/sites']);
this.httpLoginService.getProfile().subscribe(res => { console.log(res);
});
  }

}
