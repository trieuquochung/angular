import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {LoginService} from '../../login.service';

@Component({
  selector: 'create-user',
  templateUrl: './create_user.component.html'
})

export class LoginCreateUserComponent implements OnInit {
  username: string;
  password: string;
  role = 'buyer';
  isLoading = false;
  @Output() onCreateSuccess = new EventEmitter();
  constructor(
    private loginService: LoginService
  ) {
  }

  createUser() {
    this.isLoading = true;
    const user = {
      username: this.username,
      password: this.password,
      role: this.role
    };
    this.loginService.createUser(user)
      .subscribe((res) => {
        if (res) {
          this.isLoading = false;
          this.onCreateSuccess.emit('created');
        }
      });
  }
  ngOnInit() {
    console.log('Create User');
  }
  cancel() {
    this.onCreateSuccess.emit('cancelled');
  }
}
