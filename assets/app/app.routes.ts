import { NavBarComponent } from './components/header/nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping/shopping-cart/shopping-cart.component';
import { ShoppingItemComponent } from './components/shopping/shopping-item/shopping-item.component';
import {AuthorizationComponent} from "./components/authorization/authorization.component";
import {SigninComponent} from "./components/authorization/signin/signin.component";
import {SignupComponent} from "./components/authorization/signup/signup.component";

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: ShoppingItemComponent, pathMatch: 'full'},
    {path: 'cart', component: ShoppingCartComponent, pathMatch: 'full'},
    {path: 'auth', component: AuthorizationComponent, children: [
        {path: '', redirectTo: '/auth/signin', pathMatch: 'full'},
        {path: 'signin', component: SigninComponent},
        {path: 'signup', component: SignupComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
})

export class AppRoutes {

}