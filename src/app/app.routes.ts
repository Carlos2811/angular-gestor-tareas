import { Routes } from '@angular/router';
import { IndexComponent } from './tareas/index/index.component';
import { VerComponent } from './tareas/ver/ver.component';
import { CrearComponent } from './tareas/crear/crear.component';
import { EditarComponent } from './tareas/editar/editar.component';

export const routes: Routes = [
  { path: '', redirectTo: 'tareas/index', pathMatch: 'full' },
  { path: 'tareas/index', component: IndexComponent }, // <--- Usar "index" para la lista de tareas
  { path: 'tareas/crear', component: CrearComponent },// <--- Usar "crear" para crear una nueva tarea
  { path: 'tareas/:id/ver', component: VerComponent }, // <--- Usar "id" para ver una tarea específica
  { path: 'tareas/:id/editar', component: EditarComponent }, // <--- Usar "id" para editar una tarea específica
  { path: '**', redirectTo: 'tareas/index' } // ruta fallback
];

