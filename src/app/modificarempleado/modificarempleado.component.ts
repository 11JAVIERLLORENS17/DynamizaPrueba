import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Empleados } from '../empleados';
import { EmpleadosService } from '../empleados.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificarempleado',
  templateUrl: './modificarempleado.component.html',
  styleUrls: ['./modificarempleado.component.css']
})
export class ModificarempleadoComponent implements OnInit {

  empleado: Empleados;
  @Input() id: number;
  @Input() nombre: string;
  @Input() edad: number;
  @Input() cargo: string;
  @Input() contratado: boolean;
  @Output() visible = new EventEmitter<Empleados>();
  mensajeErr = "";
  editado = -1;
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
    console.log("Editando empleado " + this.empleado.id);
    this.empleadosService.editarEmpleado(this.empleado).subscribe(
      resp => {
        this.mensajeErr = "";
        this.editado = 1;
        this.visible.emit(this.empleado);
        this._router.navigate(['empleados']);
      },
      error => {
        this.editado = 0;
        this.mensajeErr = "";
        if (error instanceof ErrorEvent) {
          this.mensajeErr = error.error.message;
        }
        else if (error.status == 409) {
          this.editado = 0;
          this.mensajeErr = "Empleado no existe";
        } else {
          this.mensajeErr = "Error status: " + error.status;
        }
      }
    );
  }
}