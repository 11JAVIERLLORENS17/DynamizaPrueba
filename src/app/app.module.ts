import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { CommentsComponent } from './comments/comments.component';
import { FacturasComponent } from './facturas/facturas.component';
import { NominasComponent } from './nominas/nominas.component';
import { NuevoempleadoComponent } from './nuevoempleado/nuevoempleado.component';
import { ModificarempleadoComponent } from './modificarempleado/modificarempleado.component';
import { BorrarempleadoComponent } from './borrarempleado/borrarempleado.component';
import { NuevafacturaComponent } from './nuevafactura/nuevafactura.component';
import { ModificarfacturaComponent } from './modificarfactura/modificarfactura.component';
import { BorrarfacturaComponent } from './borrarfactura/borrarfactura.component';
import { NuevanominaComponent } from './nuevanomina/nuevanomina.component';
import { ModificarnominaComponent } from './modificarnomina/modificarnomina.component';
import { BorrarnominaComponent } from './borrarnomina/borrarnomina.component';
import { NuevocomentarioComponent } from './nuevocomentario/nuevocomentario.component';
import { ModificarcomentarioComponent } from './modificarcomentario/modificarcomentario.component';
import { BorrarcomentarioComponent } from './borrarcomentario/borrarcomentario.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    CommentsComponent,
    FacturasComponent,
    NominasComponent,
    NuevoempleadoComponent,
    ModificarempleadoComponent,
    BorrarempleadoComponent,
    NuevafacturaComponent,
    ModificarfacturaComponent,
    BorrarfacturaComponent,
    NuevanominaComponent,
    ModificarnominaComponent,
    BorrarnominaComponent,
    NuevocomentarioComponent,
    ModificarcomentarioComponent,
    BorrarcomentarioComponent    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    routing,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
