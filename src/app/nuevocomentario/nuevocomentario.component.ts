import { Component, OnInit } from '@angular/core';
import { Comments } from '../comments';
import { CommentsService } from '../comments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevocomentario',
  templateUrl: './nuevocomentario.component.html',
  styleUrls: ['./nuevocomentario.component.css']
})
export class NuevocomentarioComponent implements OnInit {

  comment: Comments;
  introducido = -1;
  mensajeErr = "";

  constructor(private commentsService: CommentsService, private _router: Router) {
    this.comment = new Comments();
  }

  ngOnInit(): void {
  }
  cancel() {
    this._router.navigate(['comments']);
  }
  onSubmit() {
    this.commentsService.introducirComments(this.comment).subscribe(
      resp => {
        this.mensajeErr = "";
        this.introducido = 1;
        this.comment.id = 0;
        this.comment.nombre = "";
        this.comment.email = "";
        this.comment.mensaje = "";
        this.comment.created_at = "";
        this._router.navigate(['comments']);
      },
      error => {
        this.introducido = 0;
        this.mensajeErr = "";
        if (error instanceof ErrorEvent) {
          this.mensajeErr = error.error.message;
        }
        else if (error.status == 409) {
          this.introducido = 0;
          this.mensajeErr = "Comment ya existe";
        } else {
          this.mensajeErr = "Error status: " + error.status;
        }
      }
    );
  }

}
