import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PalindromosComponent} from './palindromo/palindromos/palindromos.component';
import {VeiculoComponent} from './veiculos/veiculo/veiculo.component';
import {TransacaoComponent} from './transacao/transacao/transacao.component';

export const routes: Routes = [
  {path: '', redirectTo: 'palindromo', pathMatch: 'full'},
  {path: 'palindromo', component: PalindromosComponent},
  {path: 'transacao', component: TransacaoComponent},
  {path: 'veiculo', component: VeiculoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
