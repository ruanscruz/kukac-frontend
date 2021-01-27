import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PalindromosComponent } from './palindromo/palindromos/palindromos.component';
import { TransacaoComponent } from './transacao/transacao/transacao.component';
import { VeiculoComponent } from './veiculos/veiculo/veiculo.component';
import {AppRoutingModule} from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PalindromosComponent,
    TransacaoComponent,
    VeiculoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
