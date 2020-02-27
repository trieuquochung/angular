import { NgModule } from '@angular/core';
import { LoginRouting } from "./login.routing";
import { LoginComponent } from "./login.component";
import { LoginService } from "./login.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HomeModule } from "../home/home.module";
import { LoginMainComponent } from "./components/main/main.component";
import { LoginCreateUserComponent } from "./components/create/create_user.component";


@NgModule({
  imports: [
    LoginRouting, CommonModule, FormsModule
  ],
  providers: [
    LoginService
  ],
  declarations: [
    LoginComponent, LoginMainComponent, LoginCreateUserComponent
  ]
})
export class LoginModule { }
