import { Component, OnInit } from '@angular/core';
import { IPensamento } from 'src/app/interfaces/IPensamento';
import { PensamentosService } from 'src/app/services/pensamentos.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: IPensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  constructor(private service: PensamentosService) {}
  filtro: string = '';

  ngOnInit(): void {
    this.service
      .getLista(this.paginaAtual, this.filtro)
      .subscribe((listaDePensamento) => {
        this.listaPensamentos = listaDePensamento;
        console.log(this.listaPensamentos);
      });
  }

  carregarMaisPensamentos() {
    this.service
      .getLista(++this.paginaAtual, this.filtro)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos.push(...listaPensamentos);
        if (!listaPensamentos.length) {
          this.haMaisPensamentos = false;
        }
      });
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service
      .getLista(this.paginaAtual, this.filtro)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos = listaPensamentos;
      });
  }
}
