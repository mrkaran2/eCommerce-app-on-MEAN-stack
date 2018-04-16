import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {CartService} from "../../../services/cart-service/cart.service";
import {ItemModel} from "../../../models/item.model";


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ShoppingListComponent implements OnInit {

    @ViewChild('newItem') newItem: ElementRef;

  constructor(private Cart: CartService) {

  }

  add() {
      if(!(this.newItem.nativeElement.value === "")) {
          this.Cart.setData(this.newItem.nativeElement.value)
              .then((obj) => {
                  this.Cart.getData()
                      .then((response) => {
                          this.Cart.cartItems = [];
                          for (let item in response.obj) {
                              this.Cart.cartItems.push(new ItemModel(response.obj[item]['_id'], response.obj[item]['name']));
                          }
                      })
                      .then(() => {
                          this.Cart.itemAdded.emit('1');
                      });
              });
      }
  }

  ngOnInit() {
  }

}
