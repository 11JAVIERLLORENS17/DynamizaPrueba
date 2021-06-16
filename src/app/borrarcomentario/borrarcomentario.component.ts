import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comments } from '../comments';
import { CommentsService } from '../comments.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-borrarcomentario',
  templateUrl: './borrarcomentario.component.html',
  styleUrls: ['./borrarcomentario.component.css']
})
export class BorrarcomentarioComponent implements OnInit {

  comment: Comments;
  @Input() id: number;
  @Input() nombre: string;
  @Input() email: string;
  @Input() mensaje: string;
  @Output() visible = new EventEmitter<Comments>();
  mensajeErr = "";
  borrado = -1;
  comments: Comments[];

  constructor(private commentsService: CommentsService, private _router: Router, private aRoute: ActivatedRoute) {
    this.comment = new Comments();
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    this.commentsService.getComment(this.id).subscribe(datos => {
      this.comments = datos;
      this.comment = new Comments();
      this.comment.id = this.id;
      this.comment.nombre = this.comments[0].nombre;
      this.comment.email = this.comments[0].email;
      this.comment.mensaje = this.comments[0].mensaje;
    }
    );
  }

  ngOnInit(): void {

  }
  cancel() {
    this.visible.emit(null);
    this._router.navigate(['comments']);
  }

  onSubmit() {
    console.log("Borrando comment " + this.comment.id);
    this.commentsService.borrarComment(this.comment.id).subscribe(datos => {
      this.borrado = 1;
      console.log("Registro Borrado");
      this._router.navigate(['comments']);
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
