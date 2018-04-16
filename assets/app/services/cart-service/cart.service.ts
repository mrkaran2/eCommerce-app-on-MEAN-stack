import {ItemModel} from "../../models/item.model";
import {EventEmitter, Injectable, OnInit} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class CartService implements OnInit{
    itemAdded = new EventEmitter(<number>);
    length: number;
    public cartItems: ItemModel[] =[];
    public userCartItems: ItemModel[] =[];
    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get('http://127.0.0.1:3000/cartitems')
            .subscribe( (response) => {
                this.cartItems = [];
                for(let item in response.obj) {
                    this.cartItems.push(new ItemModel(response.obj[item]['_id'],response.obj[item]['name']));
                }
                this.length = this.cartItems.length;
                this.itemAdded.emit(this.length);
            });
    }

    setData(newItem: string): Promise<object> {
        const tobeItem = new ItemModel('',newItem);
        const header = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('http://127.0.0.1:3000/cart', tobeItem, {headers: header}).toPromise();
    }

    getData(): Promise<object> {
        return this.http.get('http://127.0.0.1:3000/cartitems').toPromise();
    }

    deleteIt(item: string) {
        this.http.delete(`http://127.0.0.1:3000/deletecartitem/${item}`).toPromise()
            .then( (obj) => {
                this.getData().then( (response) => {
                    this.cartItems = [];
                    for(let item in response.obj) {
                        this.cartItems.push(new ItemModel(response.obj[item]['_id'],response.obj[item]['name']));
                    }
                }).then ( ()=> {
                    this.itemAdded.emit(this.length);
                });
            });

    }


    deleteFromCart(item: string) {
        this.http.delete(`http://127.0.0.1:3000/deletefromcart/${item}`).toPromise()
            .then( (obj) => {
                this.getData().then( (response) => {
                    this.userCartItems = [];
                    for(let item in response.obj) {
                        this.userCartItems.push(new ItemModel(response.obj[item]['_id'],response.obj[item]['name']));
                    }
                }).then ( ()=> {
                    this.itemAdded.emit(this.length);
                });
            });
    }

    getUserCart() {
        this.http.get('http://127.0.0.1:3000/karan/cart').toPromise()
            .then((resp) => {
                return resp.obj;
            })
            .then((id) => {
                this.userCartItems = [];
                for(let items of id) {
                    this.http.get(`http://127.0.0.1:3000/items/${items}`).toPromise()
                        .then((resp) => {
                            if (!(resp.obj === null)) {
                                this.userCartItems.push(new ItemModel(resp.obj._id, resp.obj.name));
                            }
                        })
                        .then ( ()=> {
                            this.itemAdded.emit(this.length);
                        });
                }
            });

    }



    addToUserCart(id: string) {
        return this.http.patch(`http://127.0.0.1:3000/addtocart/${id}`).toPromise();
    }

    deleteFromUserCart(id: string) {
        return this.http.patch(`http://127.0.0.1:3000/deletefromcart/${id}`).toPromise();
    }

}