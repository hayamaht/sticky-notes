import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-container',
  template: `
<div class="">
  <label>
    {{label}}
  </label>

  <div class="">
    <ng-content></ng-content>
  </div>
</div>
  `,
})
export class InputContainerComponent {
  @Input() label!: string;
}
