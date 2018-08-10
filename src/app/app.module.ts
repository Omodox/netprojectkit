import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { SitesComponent } from './sites/sites.component';


import { HttpClientModule } from '@angular/common/http';

import { HttpLoginService } from './login/http-login.service';
import { AllHttpService } from './all-http.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ShablonComponent } from './shablon/shablon.component';
import { ShablonsComponent } from './shablons/shablons.component';
import { ModalComponent } from './modal/modal.component';
import { GlobalService } from './global.service';
import { PageComponent } from './page/page.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagesComponent,
    SitesComponent,
    NavbarComponent,
    ShablonComponent,
    ShablonsComponent,
    ModalComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpLoginService, AllHttpService, GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
