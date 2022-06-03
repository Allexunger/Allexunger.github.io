import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarbaseComponent } from './starbase/starbase.component';
import { HomeComponent } from './home/home.component';
import { DestinationComponent } from './destination/destination.component';
import { MarsComponent } from './mars/mars.component';
import { PlanetsComponent } from './planets/planets.component';
import { MoonComponent } from './moon/moon.component';
import { EuropaComponent } from './europa/europa.component';
import { TitanComponent } from './titan/titan.component';

@NgModule({
  declarations: [
    AppComponent,
    StarbaseComponent,
    HomeComponent,
    DestinationComponent,
    MarsComponent,
    PlanetsComponent,
    MoonComponent,
    EuropaComponent,
    TitanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
