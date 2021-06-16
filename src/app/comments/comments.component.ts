import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments = null;
  public page: number;
  constructor(private empleadosService: EmpleadosService) { }

  ngOnInit(): void {
    this.empleadosService.getComments()
      .subscribe(result => this.comments = result);
  }


}
