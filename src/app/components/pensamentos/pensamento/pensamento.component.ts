import { Component, Input, OnInit } from '@angular/core';
import { IPensamento } from 'src/app/interfaces/IPensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.scss'],
})
export class PensamentoComponent implements OnInit {
  @Input() pensamento: IPensamento = {
    id: 1,
    conteudo: 'jjtyjty',
    autoria: 'jtyjtyj',
    modelo: 'tyjtyj',
  };
  constructor() {}
  ngOnInit(): void {}

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length > 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
