import { NgModule } from '@angular/core';
import { HomeRouting} from './home-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule  } from '@angular/forms';
import { HomeComponent } from './home.component';
import { MainComponent } from './components/main/main.component';
import { HomeService } from './services/home.service';
import { LoginModule } from '../login/login.module';
import { CheckoutComponent } from './components/checkout/checkout.component';

@NgModule(
  {
    imports: [
      HomeRouting, CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule, LoginModule
    ],
    providers: [
      HomeService
    ],
    declarations: [
      HomeComponent, MainComponent, CheckoutComponent
    ]
  }
)

export class HomeModule {}
