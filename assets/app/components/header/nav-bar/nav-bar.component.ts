import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {CartService} from "../../../services/cart-service/cart.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent implements OnInit {
  length: number = 0;
  constructor(private Cart: CartService) {
      this.Cart.itemAdded.subscribe((num)=>{
          this.length = this.Cart.userCartItems.length;

      });
  }

  ngOnInit() {


  }


}
