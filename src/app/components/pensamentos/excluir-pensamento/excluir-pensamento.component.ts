import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPensamento } from 'src/app/interfaces/IPensamento';
import { PensamentosService } from 'src/app/services/pensamentos.service';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.scss'],
})
export class ExcluirPensamentoComponent implements OnInit {
  constructor(
    private service: PensamentosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  pensamento: IPensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }

  excluirPensamento() {
    if (this.pensamento.id) {
      this.service.excluirPensamento(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/muralDePensamento']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/muralDePensamento']);
  }
}
