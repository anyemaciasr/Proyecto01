import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Hotel } from '../LogisticaDelSinu/Models/hotel';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class HotelService {
  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl;
  }
  post(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(this.baseUrl + 'api/Hotel', hotel)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Hotel>('Registrar Hotel', null))
      );
  }

  gets(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.baseUrl + 'api/Hotel')
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Hotel[]>('Consulta Hotel', null))
        );
  }

  get(nit: string): Observable<Hotel> {
    const url = `${this.baseUrl + 'api/Hotel'}/${nit}`;
      return this.http.get<Hotel>(url,httpOptions)
      .pipe(
        tap(_ => this.handleErrorService.log('nit enviada y hotel recibido')),
        catchError(this.handleErrorService.handleError<Hotel>("Consulta x nit", null))
      );
  }

  put(hotel: Hotel): Observable<Hotel> {
    const url = `${this.baseUrl + 'api/Hotel'}/${hotel.nit}`;
    return this.http.put<Hotel>(url, hotel, httpOptions)
    .pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<Hotel>('Editar hotel'))
    );
  }

}
