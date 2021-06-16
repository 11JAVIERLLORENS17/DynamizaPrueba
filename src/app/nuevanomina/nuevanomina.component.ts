import { Component, OnInit } from '@angular/core';
import { Nominas } from '../nominas';

import { NominasService } from '../nominas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevanomina',
  templateUrl: './nuevanomina.component.html',
  styleUrls: ['./nuevanomina.component.css']
})
export class NuevanominaComponent implements OnInit {

  nomina: Nominas;
  introducido = -1;
  mensajeErr = "";

  constructor(private nominasService: NominasService, private _router: Router) {
    this.nomina = new Nominas();
  }

  ngOnInit(): void {
  }
  cancel() {
    this._router.navigate(['nominas']);
  }
  onSubmit() {
    this.nominasService.introducirNominas(this.nomina).subscribe(
      resp => {
        this.mensajeErr = "";
        this.introducido = 1;
        this.nomina.id = 0;
        this.nomina.nombre = "";
        this.nomina.fecha = "";
        this.nomina.bruto = 0;
        this.nomina.retencion = 0;
        this.nomina.created_at = "";
        this._router.navigate(['nominas']);
      },
      error => {
        this.introducido = 0;
        this.mensajeErr = "";
        if (error instanceof ErrorEvent) {
          this.mensajeErr = error.error.message;
        }
        else if (error.status == 409) {
          this.introducido = 0;
          this.mensajeErr = "Nomina ya existe";
        } else {
          this.mensajeErr = "Error status: " + error.status;
        }
      }
    );
  }

}
