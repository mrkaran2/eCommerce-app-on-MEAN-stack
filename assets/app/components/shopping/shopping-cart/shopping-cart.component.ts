import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {ItemModel} from "../../../models/item.model";
import {CartService} from "../../../services/cart-service/cart.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ShoppingCartComponent implements OnInit {
  mycart: ItemModel[] = [];
  constructor(private Cart: CartService) {
      this.Cart.getUserCart();
      this.mycart = this.Cart.userCartItems;
  }

  deleteThis(item: string) {
      //this.Cart.deleteIt(item);
      this.Cart.deleteFromUserCart(item).then( (resp) => {
          this.Cart.getUserCart();
      });

    }

Updated() {
      this.Cart.itemAdded.emit('1');
}

  ngOnInit() {
      this.Cart.itemAdded.subscribe( (num) => {
          console.log(this.Cart.userCartItems);
          this.mycart = this.Cart.userCartItems;
      });

  }


}
