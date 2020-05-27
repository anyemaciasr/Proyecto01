import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Transporte } from '../LogisticaDelSinu/Models/transporte';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TransporteService {
  baseUrl: string;
  constructor(private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl; } 


    post(transporte: Transporte): Observable<Transporte> {
      return this.http.post<Transporte>(this.baseUrl + 'api/Transporte', transporte)
        .pipe(
          tap(_ => this.handleErrorService.log('datos enviados')),
          catchError(this.handleErrorService.handleError<Transporte>('Registrar Transporte', null))
        );
    }

    gets(): Observable<Transporte[]> {
      return this.http.get<Transporte[]>(this.baseUrl + 'api/Transporte')
          .pipe(
              tap(_ => this.handleErrorService.log('datos enviados')),
              catchError(this.handleErrorService.handleError<Transporte[]>('Consulta Transporte', null))
          );
    }

    get(nit: string): Observable<Transporte> {
      const url = `${this.baseUrl + 'api/Transporte'}/${nit}`;
        return this.http.get<Transporte>(url,httpOptions)
        .pipe(
          tap(_ => this.handleErrorService.log('nit enviada y restaurante recibido')),
          catchError(this.handleErrorService.handleError<Transporte>("Consulta x nit", null))
        );
    }

    put(transporte: Transporte): Observable<Transporte> {
      const url = `${this.baseUrl + 'api/Transporte'}/${transporte.nit}`;
      return this.http.put<Transporte>(url, transporte, httpOptions)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Transporte>('Editar restaurante'))
      );
    }
}
