import { Component, OnInit, inject } from '@angular/core';
import { Auth, authState, user, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss']
})
export class SignInPage {
  #formBuilder = inject(FormBuilder);
  #authService = inject(AuthService);

  signInForm: FormGroup = this.#formBuilder.group({
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
    this.#authService.signInWithGogle();
  }

  onSubmit() {
    this.isSubmitted = true;
  }
}
