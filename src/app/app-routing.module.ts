import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path: 'inicio', component: BodyComponent},
  {path: 'inicia-sesion', component: SignInComponent},
  {path: 'registro', component: SignUpComponent},
  {path: 'planes', component: PricingComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
