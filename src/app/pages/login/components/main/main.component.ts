import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from "../../login.service";

@Component(
  {
    selector: 'login-main-component',
    templateUrl: './main.component.html',
  }
)

export class LoginMainComponent implements OnInit{
  username: string;
  password: string;
  user: any = {};
  users: any = [];
  isLoading: boolean = false;
  wrongPassword: boolean = false;
  isCreateView: boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
  }

  onLogin() {
    this.isLoading = true;
    this.loginService.getUsers()
      .subscribe((res)=>{
      if (res) {
        this.users = res;
        if (this.validatorUser()[0]) {
            localStorage.setItem('user', JSON.stringify({
            'id': this.validatorUser()[0].id,
            'username': this.validatorUser()[0].username,
            'role': this.validatorUser()[0].role
          }));
          if (localStorage.getItem('checkouts')) {
           this.router.navigate(['/checkout']) 
          } else {
            this.router.navigate(['']);
          }
          this.wrongPassword = false;
        } else {
          this.wrongPassword = true;
        }
        this.isLoading = false;

      }
    });
  }

  validatorUser() {
    return this.users.filter(o => o.username === this.username && o.password === this.password);
  }

  onCancel() {
    this.username = '';
    this.password = '';
    this.wrongPassword = false;
    this.router.navigate(['']);
  }
  ngOnInit() {
  }

  createUser() {
    this.isCreateView = true;
    // this.router.navigate(['/create']);
  }
  changeView($event) {
    if ($event) {
      this.isCreateView = false;
    }
  }
}
