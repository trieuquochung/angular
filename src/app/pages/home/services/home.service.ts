import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class HomeService {
  checkouts: any = [];
  constructor(private http: HttpClient) {}

  putData(data) {
    return this.http.put('https://5e4e7cda6272aa0014230b67.mockapi.io/employee/' + data.id, data);
  }

  postData(data) {
    return this.http.post('https://5e4e7cda6272aa0014230b67.mockapi.io/employee/', data);
  }

  deleteData(data) {
    return this.http.delete('https://5e4e7cda6272aa0014230b67.mockapi.io/employee/' + data.id);
  }

  getData() {
    return this.http.get('https://5e4e7cda6272aa0014230b67.mockapi.io/employee/');
  }

  getItemList() {
    return this.http.get('https://5e4e7cda6272aa0014230b67.mockapi.io/items/');
  }


  // postCheckoutList(data) {
  //   // this.checkouts = data;
  //   return this.http.post('https://5e4e7cda6272aa0014230b67.mockapi.io/checkoutlist/', data);
  //   //Question here: Can I update multiple with method PUT at api:items instead of creating a new api:checkout
  //   // or use checkouts array
  // }

  getCheckoutList() {
    return this.checkouts;
  }

  postCheckouts(data) {
    // return this.http.post('https://5e4e7cda6272aa0014230b67.mockapi.io/users/' + data.userId + '/items/', data.items);
    return this.http.post('https://5e4e7cda6272aa0014230b67.mockapi.io/userItems/', data);
  }

  getCheckouts(data) {
    return this.http.get('https://5e4e7cda6272aa0014230b67.mockapi.io/userItems/');
  }
}
