import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {ItemModel} from "../../../models/item.model";
import {CartService} from "../../../services/cart-service/cart.service";
@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {

    mycart: ItemModel[] = [];
    constructor(private Cart: CartService) {
        this.Cart.http.get('http://127.0.0.1:3000/cartitems')
            .subscribe( (response) => {
                this.Cart.cartItems = [];
                for(let item in response.obj) {
                    this.Cart.cartItems.push(new ItemModel(response.obj[item]['_id'],response.obj[item]['name']));
                }
                this.Cart.length = this.Cart.cartItems.length;
                this.Cart.itemAdded.emit(this.Cart.length);
            });
    }

    deleteThis(item: string) {
        this.Cart.deleteIt(item);
    }

    Updated() {
        this.Cart.itemAdded.emit('1');
    }

    ngOnInit() {
        this.Cart.itemAdded.subscribe( (num) => {
            this.mycart = this.Cart.cartItems;
        });

    }

    addToUserCart(itemID: string) {
        this.Cart.addToUserCart(itemID)
            .then( () => {
                this.Cart.getUserCart();
            });
    }

}
