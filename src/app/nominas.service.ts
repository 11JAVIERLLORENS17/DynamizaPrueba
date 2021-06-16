import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleados } from '../app/empleados';
import { Facturas } from '../app/facturas';
import { Nominas } from '../app/nominas';
import { Comments } from '../app/comments';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class NominasService {

  constructor(private http: HttpClient) { }

  getEmpleados() {
    return this.http.get("http://test-api.jtarrega.es/api/empleados")
  }

  getEmpleado(id): Observable<Empleados[]> {
    console.log("ID: " + id + " Nombre: ");
    return this.http.get<Empleados[]>("http://test-api.jtarrega.es/api/empleados/" + id);
  }
  getNominas() {
    return this.http.get("http://test-api.jtarrega.es/api/nominas")
  }
  getNomina(id): Observable<Nominas[]> {
    console.log("ID: " + id);
    return this.http.get<Nominas[]>("http://test-api.jtarrega.es/api/nominas/" + id);
  }
  getFacturas() {
    return this.http.get("http://test-api.jtarrega.es/api/facturas")
  }
  getFactura(id): Observable<Facturas[]> {
    console.log("ID: " + id);
    return this.http.get<Facturas[]>("http://test-api.jtarrega.es/api/facturas/" + id);
  }
  getComments() {
    return this.http.get("http://test-api.jtarrega.es/api/comments")
  }
  getComment(id): Observable<Comments[]> {
    console.log("ID: " + id);
    return this.http.get<Comments[]>("http://test-api.jtarrega.es/api/comments/" + id);
  }

  editarNomina(nomina: Nominas) {
    console.log("ID nomina: " + nomina.id);
    return this.http.put("http://test-api.jtarrega.es/api/nominas/" + nomina.id, nomina, httpOptions);
  }
  borrarNomina(id) {
    return this.http.delete("http://test-api.jtarrega.es/api/nominas/" + id);
  }
  introducirNominas(nomina: Nominas): Observable<any> {
    return this.http.post("http://test-api.jtarrega.es/api/nominas", nomina, httpOptions);
  }
}