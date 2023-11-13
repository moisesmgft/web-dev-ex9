// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',  
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(public authService: AuthService) {}

  login() {
    this.authService.authenticate();
  }

  logout() {
    this.authService.logout();
  }
}
