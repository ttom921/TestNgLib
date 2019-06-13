import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HsLibModule } from "hs-lib";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HsLibModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
