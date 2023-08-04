import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IPensamento } from 'src/app/interfaces/IPensamento';
import { PensamentosService } from 'src/app/services/pensamentos.service';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.scss'],
})
export class EditarPensamentoComponent implements OnInit {
  formularioEditar!: FormGroup;
  constructor(
    private service: PensamentosService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
        console.log(pensamento);
        this.formularioEditar = this.formBuilder.group({
          id:[pensamento.id],
          conteudo: [pensamento.conteudo, Validators.compose([Validators.required, Validators.pattern(/(.|\s)*\S(.|\s)*/),
          Validators.minLength(5)])],
          autoria: [
            pensamento.autoria,
            Validators.compose([Validators.required, Validators.minLength(3)]),
          ],
          modelo: [pensamento.modelo, [Validators.required]],
          favorito: [pensamento.favorito]
        })
      });
    }

  }

  editarPensamento() {
    if(this.formularioEditar.valid){
      this.service.editarPensamento(this.formularioEditar.value).subscribe(()=>{
        this.router.navigate(['/muralDePensamento'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/muralDePensamento']);
  }

  habilitarBotao(): string {
    if (this.formularioEditar.valid) {
      return 'botao';
    } else {
      return 'botao__desabilitado';
    }
  }
}
