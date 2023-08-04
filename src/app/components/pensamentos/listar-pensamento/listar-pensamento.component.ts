import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private service: PensamentosService, private router: Router) {}
  filtro: string = '';
  favoritos: boolean = false;
  listaFavoritos: IPensamento[] = [];
  titulo:string='Meu Mural'

  ngOnInit(): void {
    this.service
      .getLista(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe((listaDePensamento) => {
        this.listaPensamentos = listaDePensamento;
      });
  }

  carregarMaisPensamentos() {
    this.service
      .getLista(++this.paginaAtual, this.filtro, this.favoritos)
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
      .getLista(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos = listaPensamentos;
      });
  }

  recarregarComponente() {
    this.favoritos = false;
    this.paginaAtual = 1;

    this.router.navigate([this.router.url]);
  }

  mostrarFavoritos() {
    this.titulo='Pensamentos Favoritos'
    this.favoritos = true;
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service
      .getLista(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe((listaPensamentosFavoritos) => {
        this.listaPensamentos = listaPensamentosFavoritos;
        this.listaFavoritos = listaPensamentosFavoritos;
      });
  }
}
