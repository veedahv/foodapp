import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
// import { JwtHelperService } from '@auth0/angular-jwt';
// import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authState = new BehaviorSubject(false);
  authUserId = new BehaviorSubject('');
  // url = environment.apiUrl + 'auth/';

  constructor(
    private router: Router,
    private platform: Platform,
    // public jwtHelper: JwtHelperService,
    private http: HttpClient
  ) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }

  ifLoggedIn() {
    return localStorage.user
      ? this.authState.next(true)
      : this.authState.next(false);
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    if (!token) {
      return false;
    }
    return true;
  }

  storeUser(data) {
    localStorage.user = JSON.stringify(data);
    localStorage.token = data.accessToken;
  }

  storeAuth(auth) {
    localStorage.auth = JSON.stringify(auth);
  }

  retrievAuth() {
    return JSON.parse(localStorage.auth || 'null');
  }

  // requestOTP(phone: string) {
  //   return this.http.post(this.url + 'get-otp', { phone });
  // }

  // verifyOTP(code: string, phone: string) {
  //   return this.http.post(this.url + 'verify-otp', { code, phone });
  // }

  // login(data: { phone: string; token: string; country_code: string }) {
  //   return this.http.post(this.url + 'login', data);
  // }

  async logout() {
    localStorage.clear();
    await this.router.navigate(['auth']);
    this.authState.next(false);
  }

  loggedUser() {
    return JSON.parse(localStorage.user || 'null');
  }

  // checkEmail(email) {
  //   return this.http.get(`${this.url}check-email/${email}`);
  // }

  // checkUsername(user) {
  //   return this.http.get(`${this.url}check-username/${user}`);
  // }

  // setUpAccount(user) {
  //   return this.http.post(`${this.url}register`, user);
  // }
}
