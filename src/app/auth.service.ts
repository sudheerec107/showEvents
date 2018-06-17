import { Injectable } from '@angular/core';

interface User {
  id: string,
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private user: User;

  constructor() { }

  signIn(user: User) {
    this.user = { ...user };
  }

  getUser(): User {
    return { ...this.user };
  }

  isAuthorized(): boolean {
    return this.user != null;
  }

  logout() {
    this.user = null;
  }
}
