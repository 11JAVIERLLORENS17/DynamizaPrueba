import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  empleados = null;
  public page: number;
  constructor(private empleadosService: EmpleadosService) { }

  ngOnInit(): void {
    this.empleadosService.getEmpleados()
      .subscribe(result => this.empleados = result);
  }

}
