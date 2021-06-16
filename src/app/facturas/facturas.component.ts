import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {
  facturas = null;
  public page: number;
  constructor(private empleadosService: EmpleadosService) { }

  ngOnInit(): void {
    this.empleadosService.getFacturas()
      .subscribe(result => this.facturas = result);
  }

}
