import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {
  private url = 'http://localhost:3000/transacao';

  constructor(private httpClient: HttpClient) { }

  realizarTransacao(compra: object): Observable<any> {
    return this.httpClient.post(this.url, compra);
  }
}
