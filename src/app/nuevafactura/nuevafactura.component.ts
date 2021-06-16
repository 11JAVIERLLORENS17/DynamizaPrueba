import { Component, OnInit } from '@angular/core';
import { Facturas } from '../facturas';

import { FacturasService } from '../facturas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nuevafactura',
  templateUrl: './nuevafactura.component.html',
  styleUrls: ['./nuevafactura.component.css']
})
export class NuevafacturaComponent implements OnInit {


  factura: Facturas;
  introducido = -1;
  mensajeErr = "";

  constructor(private facturasService: FacturasService, private _router: Router) {
    this.factura = new Facturas();
  }

  ngOnInit(): void {
  }
  cancel() {
    this._router.navigate(['facturas']);
  }
  onSubmit() {
    this.facturasService.introducirFacturas(this.factura).subscribe(
      resp => {
        this.mensajeErr = "";
        this.introducido = 1;
        this.factura.id = 0;
        this.factura.cliente = "";
        this.factura.fecha = new Date;
        this.factura.importe = 0;
        this.factura.iva = 0;
        this.factura.created_at = "";
        this._router.navigate(['facturas']);
      },
      error => {
        this.introducido = 0;
        this.mensajeErr = "";
        if (error instanceof ErrorEvent) {
          this.mensajeErr = error.error.message;
        }
        else if (error.status == 409) {
          this.introducido = 0;
          this.mensajeErr = "Factura ya existe";
        } else {
          this.mensajeErr = "Error status: " + error.status;
        }
      }
    );
  }

}
