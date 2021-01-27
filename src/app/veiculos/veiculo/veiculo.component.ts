import {Component } from '@angular/core';
import {VeiculoService} from '../veiculo-service.service';


@Component({
  selector: 'appk-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent {
  tipo: string = '';
  modelo: string = '';
  marca: string = '';
  ano: string = '';
  nPortas: string = '';
  passageiros: string = '';
  cadastro: boolean = false;

  constructor(private service: VeiculoService) { }

  cadastrar(): void{
    const dadosVeiculo = {
      tipo: this.tipo,
      modelo: this.modelo,
      marca: this.marca,
      ano: this.ano,
      nPortas: this.nPortas,
      passageiros: this.passageiros
    };

    this.service.gravarVeiculo(dadosVeiculo).subscribe(resposta => this.cadastro = resposta);
    this.limpaCampos();

  }

  limpaCampos(): void {
    this.tipo = '';
    this.modelo = '';
    this.marca = '';
    this.ano = '';
    this.nPortas = '';
    this.passageiros = '';
    this.cadastro = false;
  }

}
