import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-signup',
    styleUrls: ['./signup.component.css'],
    templateUrl: './signup.component.html',
    encapsulation: ViewEncapsulation.None
})

export class SignupComponent implements OnInit {
    signupForm: FormGroup;
    ngOnInit() {
        this.signupForm = new FormGroup({
            name: new FormControl('Full name...', Validators.required),
            email: new FormControl('Username', Validators.required),
            password: new FormControl('Password', Validators.required)
        });
    }

    OnSubmit() {
        console.log(this.signupForm);
    }
}