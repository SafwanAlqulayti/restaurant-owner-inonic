

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClientService:HttpClient
  ) { }
  async login(data:any):Promise<Observable<any>>{
    console.log(data)
    return this.httpClientService.post(`${baseUrl}auth/signIn`,data)
  }
}
