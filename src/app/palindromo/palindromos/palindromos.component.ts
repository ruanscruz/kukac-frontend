import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'appk-palindromos',
  templateUrl: './palindromos.component.html',
  styleUrls: ['./palindromos.component.css']
})
export class PalindromosComponent {

  valorInicial = 0;
  valorFinal = 0;

  palindromos: any[] = [];

  constructor(private service: ServicePalindromos) {
  }


  capturandoIntervalo(): void{
    const intervalo = {valorInicial: this.valorInicial, valorFinal: this.valorFinal};
    this.service.gerarPalindromos(intervalo).subscribe((palindromo) => {
      this.palindromos.push(...palindromo.palindromos);
      this.limparCampos();
    });

  }

  limparCampos(): void{
    this.valorInicial = 0;
    this.valorFinal = 0;
  }
}
