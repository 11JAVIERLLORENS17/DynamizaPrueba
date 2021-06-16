import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Empleados } from '../empleados';
import { EmpleadosService } from '../empleados.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-borrarempleado',
  templateUrl: './borrarempleado.component.html',
  styleUrls: ['./borrarempleado.component.css']
})
export class BorrarempleadoComponent implements OnInit {

  empleado: Empleados;
  @Input() id: number;
  @Input() nombre: string;
  @Input() edad: number;
  @Input() cargo: string;
  @Input() contratado: boolean;
  @Output() visible = new EventEmitter<Empleados>();
  mensajeErr = "";
  borrado = -1;
  empleados: Empleados[];

  constructor(private empleadosService: EmpleadosService, private _router: Router, private aRoute: ActivatedRoute) {
    this.empleado = new Empleados();
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    this.empleadosService.getEmpleado(this.id).subscribe(datos => {
      this.empleados = datos;
      this.empleado = new Empleados();
      this.empleado.id = this.id;
      this.empleado.nombre = this.empleados[0].nombre;
      this.empleado.edad = this.empleados[0].edad;
      this.empleado.cargo = this.empleados[0].cargo;
      this.empleado.contratado = this.empleados[0].contratado;
    }
    );
  }

  ngOnInit(): void {

  }
  cancel() {
    this.visible.emit(null);
    this._router.navigate(['empleados']);
  }

  onSubmit() {
    console.log("Borrando empleado " + this.empleado.id);
    this.empleadosService.borrarEmpleado(this.empleado.id).subscribe(datos => {
      this.borrado = 1;
      console.log("Registro Borrado");
      this._router.navigate(['empleados']);
    },
      error => {
        this.borrado = 0;
        this.mensajeErr = "";
        if (error instanceof ErrorEvent) {
          this.mensajeErr = error.error.message;
        }
        else if (error.status == 404) {
          this.borrado = 0;
        } else {
          this.mensajeErr = "Error status: " + error.status;
        }
      }
    );
  }
}
