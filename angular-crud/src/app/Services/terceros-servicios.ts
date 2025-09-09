import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ITerceros } from '../Interfaces/i-terceros';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TercerosService {
  private apiUrl = 'https://localhost:7128/api/TercerosApi'; // Cambia esto por tu endpoint real

  constructor(private http: HttpClient) {}

  getAll(): Observable<ITerceros[]> {
    var terceros = this.http
      .get<ITerceros[]>(this.apiUrl)
      .pipe(catchError(this.manejoErrores));
    return terceros;
  }

  getById(id: number): Observable<ITerceros> {
    return this.http
      .get<ITerceros>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.manejoErrores));
  }

  create(tercero: ITerceros): Observable<ITerceros> {
    return this.http.post<ITerceros>(this.apiUrl, tercero);
  }

  update(cliente: ITerceros): Observable<ITerceros> {
    return this.http
      .put<ITerceros>(`${this.apiUrl}/${cliente.id}`, cliente)
      .pipe(catchError(this.manejoErrores));
  }

  delete(id:number): Observable<number>{
    return this.http
      .delete<number>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.manejoErrores));
  }
  manejoErrores(error: HttpErrorResponse) {
    const msg = error.error?.message || error.statusText || 'Error de red';
    return throwError(() => {
      new Error(msg);
    });
  }
}
