import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.getUserResult();
  }

  signOut() {
    this.authService.signOut();
  }
}
