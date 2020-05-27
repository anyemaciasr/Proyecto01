import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Usuario } from '../logisticaDelSinu/Models/usuario';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService
  ) {
    this.baseUrl = baseUrl;
  }

  post(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl + 'api/Usuario', usuario)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Usuario>('Registrar Usuario', null))
      );
  }

  gets(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl + 'api/Usuario')
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Usuario[]>('Consulta Usuario', null))
        );
  }
  get(identificacion: string): Observable<Usuario> {
    const url = `${this.baseUrl + 'api/Usuario'}/${identificacion}`;
      return this.http.get<Usuario>(url,httpOptions)
      .pipe(
        tap(_ => this.handleErrorService.log('Identifiación enviada y usuario recibido')),
        catchError(this.handleErrorService.handleError<Usuario>("Consulta x id", null))
      );
  }

  put(usuario: Usuario): Observable<Usuario> {
    const url = `${this.baseUrl + 'api/Usuario'}/${usuario.identificacion}`;
    return this.http.put<Usuario>(url, usuario, httpOptions)
    .pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<Usuario>('Editar usuario'))
    );
  }

}
