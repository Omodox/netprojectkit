import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { SitesComponent } from './sites/sites.component';
import { ShablonComponent } from './shablon/shablon.component';
import { ShablonsComponent } from './shablons/shablons.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'pages/:id', component: PagesComponent},
  { path: 'page/:id', component: PageComponent},
  { path: 'sites', component: SitesComponent},
  { path: 'shablon/:id', component: ShablonComponent},
  { path: 'shablons/:id', component: ShablonsComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
