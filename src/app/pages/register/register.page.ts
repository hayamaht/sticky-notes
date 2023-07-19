import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

function passwordMatchValidator(fg: FormGroup) {
  return fg.get('password')!.value === fg.get('passwordConfirm')!.value
    ? null : {'mismatch': true};
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage {
  #formBuilder = inject(FormBuilder);
  #router = inject(Router);

  registerForm: FormGroup = this.#formBuilder.group({
    name: ['', [
      Validators.required,
      Validators.minLength(5)
    ]],
    email: ['', [
      Validators.required, Validators.email
    ]],
    password: ['', [
      Validators.required, Validators.minLength(4)
    ]],
    passwordConfirm: ['', [
      Validators.required,
    ]],
  });

  isSubmitted = false;
  retureUrl = '';

  get fc() {
    return this.registerForm.controls;
  }

  signInGoogle() {

  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.registerForm.invalid) return;

    const val = this.registerForm.value;
    console.log(val);

    this.#router.navigateByUrl(this.retureUrl);
  }
}
