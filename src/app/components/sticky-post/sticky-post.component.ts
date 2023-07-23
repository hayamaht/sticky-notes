import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sticky-post',
  template: `
    <div class="w-40 h-40 p-2
      bg-primary-focus text-primary-content"
    >
      {{ content }}
    </div>
  `,
})
export class StickyPostComponent {
  @Input() content!: string;
}
