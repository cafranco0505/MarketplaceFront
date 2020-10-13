import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { TopbannerComponent } from './components/topbanner/topbanner.component';
import { FeaturesComponent } from './components/features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TopbannerComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
