import { Injectable, isDevMode } from '@angular/core';
import PocketBase from 'pocketbase';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private client = new PocketBase('http://localhost:8090');
  public redirect_url: string;
  constructor() {
    if (isDevMode()) this.redirect_url = 'http://localhost:4200/oauthlink';
    else this.redirect_url = '';
  }

  async getListAuthMethods() {
    return await this.client.Users.listAuthMethods();
  }

  async getDataAuth() {
    await this.client.Users.authViaOAuth2(
      'google',
      'CODE',
      'VERIFIER',
      'REDIRECT_URL'
    );
  }
  async AuthWithOauth(provider: string, code: string, verifier: string) {
    await this.client.Users.authViaOAuth2(
      provider,
      code,
      verifier,
      this.redirect_url
    );
  }

  async AuthWithEmail(email: string, password: string){
    await this.client.Users.authViaEmail(email, password);
  }

  async RegisterWithEmail(email: string, password: string){
    await this.client.Users.create({
      email: email,
      password: password,
      passwordConfirm: password,
  });
  }

  async getUserData(id:string, token:string) {
    const headers = new Headers()
    headers.append("Authorization","user "+token)
    return await this.client.Users.getOne(id)
  }
}
