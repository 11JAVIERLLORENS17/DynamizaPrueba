import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Facturas } from '../facturas';
import { FacturasService } from '../facturas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificarfactura',
  templateUrl: './modificarfactura.component.html',
  styleUrls: ['./modificarfactura.component.css']
})
export class ModificarfacturaComponent implements OnInit {

  factura: Facturas;
  @Input() id: number;
  @Input() cliente: string;
  @Input() fecha: Date;
  @Input() importe: number;
  @Input() iva: number;
  @Output() visible = new EventEmitter<Facturas>();
  mensajeErr = "";
  editado = -1;
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
    console.log("Editando factura " + this.factura.id);
    this.facturasService.editarFactura(this.factura).subscribe(
      resp => {
        this.mensajeErr = "";
        this.editado = 1;
        this.visible.emit(this.factura);
        this._router.navigate(['facturas']);
      },
      error => {
        this.editado = 0;
        this.mensajeErr = "";
        if (error instanceof ErrorEvent) {
          this.mensajeErr = error.error.message;
        }
        else if (error.status == 409) {
          this.editado = 0;
          this.mensajeErr = "Factura no existe";
        } else {
          this.mensajeErr = "Error status: " + error.status;
        }
      }
    );

  }

}
