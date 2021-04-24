import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public getUser(): any {
    if (Math.random() > 0.5) {
      return 'xxx';
    } else {
      return this.httpClient.get('https://api.github.com/users/juszczak');
    }
  }
}
