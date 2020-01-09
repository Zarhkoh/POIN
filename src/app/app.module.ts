import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MeteoLargeComponent } from './components/meteo-large/meteo-large.component';
import { MeteoTinyComponent } from './components/meteo-tiny/meteo-tiny.component';
import { GestureComponent } from './components/gesture/gesture.component';
import { InfosScrollingComponent } from './components/infos-scrolling/infos-scrolling.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MeteoLargeComponent,
    MeteoTinyComponent,
    GestureComponent,
    InfosScrollingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
