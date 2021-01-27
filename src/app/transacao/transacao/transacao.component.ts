import { Component, OnInit } from '@angular/core';
import {TransacaoService} from '../transacao-service.service';

@Component({
  selector: 'appk-transacao',
  templateUrl: './transacao.component.html',
  styleUrls: ['./transacao.component.css']
})
export class TransacaoComponent {

  valorCompra = 0;
  valorPago = 0;
  totalNotas = 0;
  troco = 0;
  notas1 = 0;
  notas10 = 0;
  notas100 = 0;


  constructor(private service: TransacaoService) { }

  efetuarTransacao(): void {
    const compra = {valorCompra: this.valorCompra, valorPago: this.valorPago};
    this.service.realizarTransacao(compra).subscribe((consulta) => {
      this.valorCompra = consulta.transacao.valorCompra;
      this.valorPago = consulta.transacao.valorPago;
      this.troco = consulta.transacao.valorTroco;
      this.totalNotas = consulta.transacao.totalNotas;
      this.notas1 = consulta.transacao.trocoNotas.nota1;
      this.notas10 = consulta.transacao.trocoNotas.nota10;
      this.notas100 = consulta.transacao.trocoNotas.nota100;
      console.log(consulta);
    });
    this.limparCampos();
  }


  limparCampos(): void{
    this.valorCompra = 0;
    this.valorPago = 0;
  }


}
