import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { CountryDetailComponent } from './component/country-detail/country-detail.component';
import { AllCountriesComponent } from './component/all-countries/all-countries.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountryDetailComponent,
    AllCountriesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
