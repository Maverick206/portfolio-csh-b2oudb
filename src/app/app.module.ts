import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { Material } from '@angular/material/card';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CshbotComponent } from './cshbot/cshbot.component';

import { CalcService } from '../calc.service';
import { CshbotService } from '../cshbot.service';
import { Mg-something-cute } from '../mg-something-cute/mg-something-cute/component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'cshbot', component: CshbotComponent },
    { path: 'mg-something-cute', component: mg-something-cute}
  ]) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutComponent, CshbotComponent ],
  providers: [CalcService, CshbotService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
