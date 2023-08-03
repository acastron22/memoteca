import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPensamento } from '../interfaces/IPensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PensamentosService {
  private readonly API = 'http://localhost:3000/pensamentos';
  constructor(private http: HttpClient) {}

  getLista(pagina: number, filtro: string): Observable<IPensamento[]> {
    const itensPorPagina = 6;


    let params = new HttpParams()
      .set('_page', pagina)
      .set('_limit', itensPorPagina);
      if(filtro.trim().length > 2) {
        params = params.set("q", filtro)
      }

    return this.http.get<IPensamento[]>(this.API, { params });
  }

  criarPensamento(pensamento: IPensamento): Observable<IPensamento> {
    return this.http.post<IPensamento>(this.API, pensamento);
  }

  editarPensamento(pensamento: IPensamento): Observable<IPensamento> {
    const url = `${this.API}/${pensamento.id}`;
    return this.http.put<IPensamento>(url, pensamento);
  }

  excluirPensamento(id: number): Observable<IPensamento> {
    const url = `${this.API}/${id}`;
    return this.http.delete<IPensamento>(url);
  }

  buscarPorId(id: number): Observable<IPensamento> {
    const url = `${this.API}/${id}`;
    return this.http.get<IPensamento>(url);
  }
}
