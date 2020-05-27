import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Restaurante } from '../LogisticaDelSinu/Models/restaurante';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {
  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl; }

    post(restaurante: Restaurante): Observable<Restaurante> {
      return this.http.post<Restaurante>(this.baseUrl + 'api/Restaurante', restaurante)
        .pipe(
          tap(_ => this.handleErrorService.log('datos enviados')),
          catchError(this.handleErrorService.handleError<Restaurante>('Registrar Restaurante', null))
        );
    }

    gets(): Observable<Restaurante[]> {
      return this.http.get<Restaurante[]>(this.baseUrl + 'api/Restaurante')
          .pipe(
              tap(_ => this.handleErrorService.log('datos enviados')),
              catchError(this.handleErrorService.handleError<Restaurante[]>('Consulta Restaurante', null))
          );
    }

    get(nit: string): Observable<Restaurante> {
      const url = `${this.baseUrl + 'api/Restaurante'}/${nit}`;
        return this.http.get<Restaurante>(url,httpOptions)
        .pipe(
          tap(_ => this.handleErrorService.log('nit enviada y restaurante recibido')),
          catchError(this.handleErrorService.handleError<Restaurante>("Consulta x nit", null))
        );
    }

    put(restaurante: Restaurante): Observable<Restaurante> {
      const url = `${this.baseUrl + 'api/Restaurante'}/${restaurante.nit}`;
     console.log(url) 
     return this.http.put<Restaurante>(url, restaurante, httpOptions)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Restaurante>('Editar restaurante'))
      );
    }
}
