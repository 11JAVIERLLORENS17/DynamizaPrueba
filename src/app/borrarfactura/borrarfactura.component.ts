import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Facturas } from '../facturas';
import { FacturasService } from '../facturas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-borrarfactura',
  templateUrl: './borrarfactura.component.html',
  styleUrls: ['./borrarfactura.component.css']
})
export class BorrarfacturaComponent implements OnInit {

  factura: Facturas;
  @Input() id: number;
  @Input() cliente: string;
  @Input() fecha: Date;
  @Input() importe: number;
  @Input() iva: number;
  @Output() visible = new EventEmitter<Facturas>();
  mensajeErr = "";
  borrado = -1;
  facturas: Facturas[];

  constructor(private facturasService: FacturasService, private _router: Router, private aRoute: ActivatedRoute) {
    this.factura = new Facturas();
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    this.facturasService.getFactura(this.id).subscribe(datos => {
      this.facturas = datos;
      this.factura = new Facturas();
      this.factura.id = this.id;
      this.factura.cliente = this.facturas[0].cliente;
      this.factura.fecha = this.facturas[0].fecha;
      this.factura.importe = this.facturas[0].importe;
      this.factura.iva = this.facturas[0].iva;
    }
    );
  }

  ngOnInit(): void {

  }
  cancel() {
    this.visible.emit(null);
    this._router.navigate(['facturas']);
  }

  onSubmit() {
    console.log("Borrando factura " + this.factura.id);
    this.facturasService.borrarFactura(this.factura.id).subscribe(datos => {
      this.borrado = 1;
      console.log("Registro Borrado");
      this._router.navigate(['facturas']);
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
