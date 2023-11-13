# Exemplo de Injection: Sistema de Login

## Funcionamento

![](assets/ex9.gif)

## Explicação

A injeção de dependência foi feita na seguinte parte do código.

```typescript
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
```

O serviço AuthService será injetado em toda a aplicação e estará disponível como um singleton.

### Uso em LoginComponent

```typescript
export class LoginComponent {
  constructor(public authService: AuthService) {}

  login() {
    this.authService.authenticate();
  }

  logout() {
    this.authService.logout();
  }
}
```
LoginCOmponent recebe uma instância do serviço por meio do construtor.

