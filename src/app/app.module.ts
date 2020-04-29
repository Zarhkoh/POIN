import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MeteoTinyComponent } from './components/meteo-tiny/meteo-tiny.component';
import { GestureComponent } from './components/gesture/gesture.component';
import { InfosScrollingComponent } from './components/infos-scrolling/infos-scrolling.component';

import { PlanComponent } from './components/plan/plan.component';
import { TarificationComponent } from './components/tarification/tarification.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { HotelAdsComponent } from './components/hotel-ads/hotel-ads.component';
import { ArrowsComponent } from './components/arrows/arrows.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MeteoTinyComponent,
    GestureComponent,
    InfosScrollingComponent,
    PlanComponent,
    TarificationComponent,
    RestaurantComponent,
    ActivitiesComponent,
    HotelAdsComponent,
    ArrowsComponent
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
