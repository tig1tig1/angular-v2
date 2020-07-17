import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { PriceComponent } from './price/price.component';


const routes: Routes = [
  {path: '', component: AboutComponent},
{path: 'Features', component: FeaturesComponent},
{path: 'Price', component: PriceComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
