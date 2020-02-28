import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginMainComponent } from "./components/main/main.component";
import { LoginCreateUserComponent } from "./components/create/create_user.component";
import { LoginComponent } from "./login.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: 'create',
        component: LoginCreateUserComponent
      },
      {
        path: 'login',
        component: LoginMainComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRouting {}
