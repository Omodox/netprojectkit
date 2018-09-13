import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpLoginService } from './http-login.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email;
  password;
  

  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private httpLoginService: HttpLoginService,
    public globalServise: GlobalService
  ) { }

  ngOnInit() {
    if (this.globalServise.myName) {
      this.router.navigate(['/sites']);
    }
  }

  login(req) {
    console.log(req.value);
    this.httpLoginService.getProfile(req.value).subscribe(res => {
      console.log(res);
      this.globalServise.myName = res['name'];
      this.globalServise.myStatus = res['status'];
      localStorage.setItem('token', res['token']);
      localStorage.setItem('sts', res['status']);
      localStorage.setItem('name', res['name']);
      if (res['token']) {
        this.router.navigate(['/sites']);
      }

    });
  }

}
