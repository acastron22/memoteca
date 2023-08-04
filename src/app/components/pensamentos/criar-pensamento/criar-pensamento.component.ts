import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IPensamento } from 'src/app/interfaces/IPensamento';
import { PensamentosService } from 'src/app/services/pensamentos.service';
import { minusculoValidators } from './minusculo-validators';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss'],
})
export class CriarPensamentoComponent implements OnInit {
  formulario!: FormGroup;
  constructor(
    private service: PensamentosService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
          Validators.minLength(5),
        ]),
      ],
      autoria: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      modelo: ['modelo1', [Validators.required]],
      favorito: [false],
    });
  }

  criarPensamento() {
    console.log(this.formulario.get('autoria')?.errors);
    if (this.formulario.valid) {
      console.log(this.formulario);
      this.service.criarPensamento(this.formulario.value).subscribe(() => {
        this.router.navigate(['/muralDePensamento']);
      });
    }
  }
  cancelar() {
    this.router.navigate(['/muralDePensamento']);
  }

  habilitarBotao(): string {
    if (this.formulario.valid) {
      return 'botao';
    } else {
      return 'botao__desabilitado';
    }
  }
}
