import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadosComponent } from './empleados/empleados.component';
import { FacturasComponent } from './facturas/facturas.component';
import { NominasComponent } from './nominas/nominas.component';
import { CommentsComponent } from './comments/comments.component';
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

const appRoutes: Routes = [
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'facturas', component: FacturasComponent },
  { path: 'nominas', component: NominasComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'nuevoempleado', component: NuevoempleadoComponent },
  { path: 'modificarempleado/:id', component: ModificarempleadoComponent },
  { path: 'borrarempleado/:id', component: BorrarempleadoComponent },
  { path: 'nuevocomentario', component: NuevocomentarioComponent },
  { path: 'modificarcomentario/:id', component: ModificarcomentarioComponent },
  { path: 'borrarcomentario/:id', component: BorrarcomentarioComponent },
  { path: 'nuevafactura', component: NuevafacturaComponent },
  { path: 'modificarfactura/:id', component: ModificarfacturaComponent },
  { path: 'borrarfactura/:id', component: BorrarfacturaComponent },
  { path: 'nuevanomina', component: NuevanominaComponent },
  { path: 'modificarnomina/:id', component: ModificarnominaComponent },
  { path: 'borrarnomina/:id', component: BorrarnominaComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
