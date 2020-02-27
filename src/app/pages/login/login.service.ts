import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()

export class LoginService {
  constructor(
    private http: HttpClient
  ) {
  }

  getUserList() {
    return this.http.get('https://5e4e7cda6272aa0014230b67.mockapi.io/users/');
  }

  createUser(data) {
    return this.http.post('https://5e4e7cda6272aa0014230b67.mockapi.io/users/', data);
  }

  getUsers() {
    return this.http.get('https://5e4e7cda6272aa0014230b67.mockapi.io/users/');
  }
}
