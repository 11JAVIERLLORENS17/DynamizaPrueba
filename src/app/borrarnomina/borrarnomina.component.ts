import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Nominas } from '../nominas';
import { NominasService } from '../nominas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-borrarnomina',
  templateUrl: './borrarnomina.component.html',
  styleUrls: ['./borrarnomina.component.css']
})
export class BorrarnominaComponent implements OnInit {

  nomina: Nominas;
  @Input() id: number;
  @Input() cliente: string;
  @Input() fecha: Date;
  @Input() importe: number;
  @Input() iva: number;
  @Output() visible = new EventEmitter<Nominas>();
  mensajeErr = "";
  borrado = -1;
  nominas: Nominas[];

  constructor(private facturasService: NominasService, private _router: Router, private aRoute: ActivatedRoute) {
    this.nomina = new Nominas();
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    this.facturasService.getNomina(this.id).subscribe(datos => {
      this.nominas = datos;
      this.nomina = new Nominas();
      this.nomina.id = this.id;
      this.nomina.nombre = this.nominas[0].nombre;
      this.nomina.fecha = this.nominas[0].fecha;
      this.nomina.bruto = this.nominas[0].bruto;
      this.nomina.retencion = this.nominas[0].retencion;
    }
    );
  }

  ngOnInit(): void {

  }
  cancel() {
    this.visible.emit(null);
    this._router.navigate(['nominas']);
  }

  onSubmit() {
    console.log("Borrando nomina " + this.nomina.id);
    this.facturasService.borrarNomina(this.nomina.id).subscribe(datos => {
      this.borrado = 1;
      console.log("Registro Borrado");
      this._router.navigate(['nominas']);
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
