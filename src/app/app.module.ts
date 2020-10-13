import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { TopbannerComponent } from './components/topbanner/topbanner.component';
import { FeaturesComponent } from './components/features/features.component';
import { OptionsComponent } from './components/options/options.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TopbannerComponent,
    FeaturesComponent,
    OptionsComponent,
    BodyComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    PricingComponent,
    CheckoutComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
