import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-nominas',
  templateUrl: './nominas.component.html',
  styleUrls: ['./nominas.component.css']
})
export class NominasComponent implements OnInit {
  nominas = null;
  constructor(private empleadosService: EmpleadosService) { }

  ngOnInit(): void {
    this.empleadosService.getNominas()
      .subscribe(result => this.nominas = result);
  }
}
