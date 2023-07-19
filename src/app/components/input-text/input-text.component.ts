import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  template: `
<app-input-container [label]="label">
  <input [type]="type"
    [placeholder]="label"
    [formControl]="formControl"
    class="input w-full"
  />
  <app-input-validation
    [control]="control"
    [showErrorsWhen]="showErrorsWhen"
  />
</app-input-container>
  `,
})
export class InputTextComponent {
  @Input()
  control!:AbstractControl;

  @Input()
  showErrorsWhen:boolean = true;

  @Input()
  label!: string;

  @Input()
  type: 'text' | 'password' | 'email' = 'text';

  get formControl(){
    return this.control as FormControl;
  }
}
