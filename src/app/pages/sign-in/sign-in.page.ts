import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss']
})
export class SignInPage {
  formBuilder = inject(FormBuilder);

  signInForm: FormGroup = this.formBuilder.group({
    email: ['', [
      Validators.required, Validators.email
    ]],
    password: ['', [
      Validators.required, Validators.minLength(4)
    ]]
  });

  isSubmitted = false;

  get fc() {
    return this.signInForm.controls;
  }

  signInGoogle() {
    console.log('Google!');
  }

  onSubmit() {
    this.isSubmitted = true;
  }
}
