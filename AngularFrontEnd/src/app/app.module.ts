import { HttpClientModule  } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NasaAPIComponent } from './components/nasa-api/nasa-api.component';
import { AtmosferaAPIComponent } from './components/atmosfera-api/atmosfera-api.component';


@NgModule({
  declarations: [
    AppComponent,
    NasaAPIComponent,
    AtmosferaAPIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
