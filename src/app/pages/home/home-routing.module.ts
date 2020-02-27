import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "./components/main/main.component";
import { LoginMainComponent } from "../login/components/main/main.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
    ]
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRouting {}
