import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  constructor(
    private router: Router,
    private homeService: HomeService
  ) {
  }
  id: any;
  selectedData: any;
  selectedList = [];
  itemList: any = [];
  isLoading = false;
  isBuyer = true;
  validUser = false;
  currentUser: any = {
    username: '',
    role: ''
  };
  carts = [];
  likes: any = [];

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.isLoading = true;
    this.homeService.getItemList()
      .subscribe((res) => {
        let user = {};
        let checkouts = {};
        user = JSON.parse(localStorage.getItem('user'));
        checkouts = JSON.parse(localStorage.getItem('checkouts'));
        this.itemList = res;
        this.isLoading = false;
        this.selectedList = [];
        user && (this.currentUser = user);
        this.parseCheckouts(user, checkouts);
      });
  }
  disableButton(buttonName) {
    switch (buttonName) {
      case 'add': {
        return this.currentUser.role === 'add' || this.currentUser.role === 'admin';
      }
      case 'edit': {
        return this.selectedList.length === 1 && (this.currentUser.role === 'edit' || this.currentUser.role === 'admin');
      }
      case 'delete': {
        return this.selectedList.length === 1 && (this.currentUser.role === 'delete' || this.currentUser.role === 'admin');
      }
      case 'checkout': {
        return this.carts.length === 0;
      }
    }
  }
  login() {
    this.router.navigate(['/login']);
  }
  logout() {
    localStorage.clear();
    location.reload();
    // this.router.navigate(['']);
    // this.ngOnInit();
  }
  checkout() {
    this.isLoading = true;
    const data = {
      username: this.currentUser.username,
      items: []
    };
    for (const item of this.carts) {
      data.items.push({
        name: item.name,
        price: item.price,
        image: item.image
      });
    }
    if (this.currentUser.role === 'buyer') {
      this.homeService.postCheckouts(data)
        .subscribe((res) => {
          this.router.navigate(['/checkout']);
          this.isLoading = false;
        });
    } else {
      localStorage.setItem('checkouts', JSON.stringify(data));
      this.router.navigate(['/login']);
    }
  }
  addToCart(item) {
    this.carts = this.itemList.filter(o => o.added);
  }
  like(id) {
    this.likes = this.itemList.filter(o => o.liked);
  }
  parseCheckouts(user, checkouts) {
    if (user && checkouts) {
      this.carts = checkouts.items;
      checkouts.username = user.username;
      for (const checkoutItem of checkouts.items) {
        for (const item of this.itemList) {
          if (item.name === checkoutItem.name) {
            item.added = true;
          }
        }
      }
    }
  }
}
