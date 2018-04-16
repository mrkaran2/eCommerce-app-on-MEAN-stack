import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutes } from './app.routes';
import { AppComponent } from "./app.component";
import { NavBarComponent } from './components/header/nav-bar/nav-bar.component';
import { ShoppingListComponent } from './components/shopping/shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './components/shopping/shopping-item/shopping-item.component';
import { ShoppingCartComponent } from './components/shopping/shopping-cart/shopping-cart.component';
import {AuthorizationComponent} from "./components/authorization/authorization.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SigninComponent} from "./components/authorization/signin/signin.component";
import {SignupComponent} from "./components/authorization/signup/signup.component";
import {CartService} from "./services/cart-service/cart.service";
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,

        ShoppingListComponent,
        ShoppingItemComponent,
        ShoppingCartComponent,
        AuthorizationComponent,
        SigninComponent,
        SignupComponent,
        NavBarComponent
    ],
    imports: [BrowserModule, AppRoutes, ReactiveFormsModule, HttpClientModule, FormsModule],
    providers: [CartService],
    bootstrap: [AppComponent]
})
export class AppModule {

}