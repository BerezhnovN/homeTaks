import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators,} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  constructor(private fb: FormBuilder) {
    this.UserAuth = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(4)]]
    })
  }

  UserAuth: FormGroup;

  auth() {
    this.UserAuth.reset();
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.UserAuth.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  ngOnInit(): void {
  }

}
