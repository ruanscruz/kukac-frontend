import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  private url = 'http://localhost:3000/veiculo';

  constructor(private httpClient: HttpClient) { }

  gravarVeiculo(veiculo: object): Observable<any> {
    return this.httpClient.post(this.url, veiculo);
  }

}
