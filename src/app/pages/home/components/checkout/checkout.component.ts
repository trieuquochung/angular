import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Router } from '@angular/router';
@Component({
  selector: 'check-out',
  templateUrl: './checkout.component.html',
  styles: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {
  checkouts = [];
  currentUser: any = {};
  constructor(
    private router: Router,
    private homeService: HomeService
  ) {
  }
  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    user && (this.currentUser = user);
    this.homeService.getCheckouts(this.currentUser)
      .subscribe((res) => {
        let checkoutList = [];
        const data = Object.values(res);
        checkoutList = data.filter(o => o.username === user.username);
        checkoutList = checkoutList[checkoutList.length - 1];
        console.log(checkoutList);
        this.checkouts = checkoutList['items'];
      });
  }
  cancel() {
    this.router.navigate(['']);
  }
  buy() {
  }
}
