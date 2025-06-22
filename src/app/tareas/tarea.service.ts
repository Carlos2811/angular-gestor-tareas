import { Injectable } from '@angular/core';
import { Tarea } from './tarea';
import { HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

 private apiURL = "http://localhost:8080/api/tareas";
    
  constructor(private http: HttpClient) {}

  // Obtener todas las tareas
  obtenerTarea(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.apiURL);
  }
  // Buscar tarea por ID
  find(id: number): Observable<Tarea> {
    return this.http.get<Tarea>(`${this.apiURL}/${id}`);
  }
  // Crear nueva tarea
  crearTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(this.apiURL, tarea);
  }
  // Editar tarea existente
  editarTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.put<Tarea>(`${this.apiURL}/${tarea.id}`, tarea);
  }
  // Borrar tarea
  borrarTarea(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }


}
