import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Nominas } from '../nominas';
import { NominasService } from '../nominas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificarnomina',
  templateUrl: './modificarnomina.component.html',
  styleUrls: ['./modificarnomina.component.css']
})
export class ModificarnominaComponent implements OnInit {

  nomina: Nominas;
  @Input() id: number;
  @Input() nombre: string;
  @Input() fecha: Date;
  @Input() bruto: number;
  @Input() retencion: number;
  @Output() visible = new EventEmitter<Nominas>();
  mensajeErr = "";
  editado = -1;
  nominas: Nominas[];

  constructor(private nominasService: NominasService, private _router: Router, private aRoute: ActivatedRoute) {
    this.nomina = new Nominas();
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    this.nominasService.getNomina(this.id).subscribe(datos => {
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
    console.log("Editando nomina " + this.nomina.id);
    this.nominasService.editarNomina(this.nomina).subscribe(
      resp => {
        this.mensajeErr = "";
        this.editado = 1;
        this.visible.emit(this.nomina);
        this._router.navigate(['nominas']);
      },
      error => {
        this.editado = 0;
        this.mensajeErr = "";
        if (error instanceof ErrorEvent) {
          this.mensajeErr = error.error.message;
        }
        else if (error.status == 409) {
          this.editado = 0;
          this.mensajeErr = "Nomina no existe";
        } else {
          this.mensajeErr = "Error status: " + error.status;
        }
      }
    );

  }

}
