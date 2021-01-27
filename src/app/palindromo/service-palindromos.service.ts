import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServicePalindromos {
  private listaPalindromos: any[];
  private url = 'http://localhost:3000/palindromos';

  constructor(private httpClient: HttpClient) {
    this.listaPalindromos = [];
  }

  gerarPalindromos(intervalo: object): Observable<any> {
    return this.httpClient.post(this.url, intervalo);
  }
}
