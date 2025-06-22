import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TareaService } from '../tarea.service';
import { Tarea } from '../tarea';

@Component({
  selector: 'app-index',
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
tareas: Tarea[] = [];
      
  /**
   * Constructor de la clase IndexComponent
   *
   * @param tareaService Servicio para manejar tareas
   */
  constructor(public tareaService: TareaService) { }
  /**
   *Método que se ejecuta al inicializar el componente 
  */
  ngOnInit(): void {
    this.tareaService.obtenerTarea().subscribe((data: Tarea[])=>{
      this.tareas = data;
      console.log(this.tareas);
    })  
  }
      
/**
 * 
 * @param id ID de la tarea a borrar
 * Método para borrar una tarea por su ID
 */
  borrarTarea(id:number){
    this.tareaService.borrarTarea(id).subscribe(res => {
         this.tareas = this.tareas.filter(item => item.id !== id);
         console.log('Tarea borrada exitosamente!');
    })
  }
}
