import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-signin',
    styleUrls: ['./signin.component.css'],
    templateUrl: './signin.component.html',
    encapsulation: ViewEncapsulation.None
})

export class SigninComponent implements OnInit {
    signinForm: FormGroup;
    ngOnInit() {
        this.signinForm = new FormGroup({
            email: new FormControl('Username', Validators.required),
            password: new FormControl('Password', Validators.required)
        });
    }

    OnSubmit() {
        console.log("fafads");
    }
}