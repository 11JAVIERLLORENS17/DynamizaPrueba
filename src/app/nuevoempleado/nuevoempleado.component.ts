import { Component, OnInit } from '@angular/core';
import { Empleados } from '../empleados';
import { EmpleadosService } from '../empleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevoempleado',
  templateUrl: './nuevoempleado.component.html',
  styleUrls: ['./nuevoempleado.component.css']
})
export class NuevoempleadoComponent implements OnInit {

  empleado: Empleados;
  introducido = -1;
  mensajeErr = "";

  constructor(private empleadosService: EmpleadosService, private _router: Router) {
    this.empleado = new Empleados();
  }

  ngOnInit(): void {
  }
  cancel() {
    this._router.navigate(['empleados']);
  }
  onSubmit() {
    this.empleadosService.introducirEmpleados(this.empleado).subscribe(
      resp => {
        this.mensajeErr = "";
        this.introducido = 1;
        this.empleado.id = 0;
        this.empleado.nombre = "";
        this.empleado.edad = 0;
        this.empleado.cargo = "";
        this.empleado.created_at = "";
        this._router.navigate(['empleados']);
      },
      error => {
        this.introducido = 0;
        this.mensajeErr = "";
        if (error instanceof ErrorEvent) {
          this.mensajeErr = error.error.message;
        }
        else if (error.status == 409) {
          this.introducido = 0;
          this.mensajeErr = "Empleado ya existe";
        } else {
          this.mensajeErr = "Error status: " + error.status;
        }
      }
    );
  }
}