// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = false;

  authenticate() {
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
  }
}
