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
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public tareaService: TareaService) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.tareaService.obtenerTarea().subscribe((data: Tarea[])=>{
      this.tareas = data;
      console.log(this.tareas);
    })  
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  borrarTarea(id:number){
    this.tareaService.borrarTarea(id).subscribe(res => {
         this.tareas = this.tareas.filter(item => item.id !== id);
         console.log('Tarea borrada exitosamente!');
    })
  }
}
