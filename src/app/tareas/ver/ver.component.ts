import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TareaService } from '../tarea.service';
import { Tarea } from '../tarea';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ver',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent {
  tarea!: Tarea;
  id!: number;
  // /**
  //  * Constructor de la clase VerComponent  
  constructor(
    private route: ActivatedRoute,
    private tareaService: TareaService,
    private router: Router
  ) {}
   //  /**
  //   * Método que se ejecuta al inicializar el componente 
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam ? +idParam : 0;

    if (!this.id) {
      console.error('ID no encontrado en la ruta.');
      this.router.navigate(['/tareas/index']);
      return;
    }
    //  * Método para obtener los detalles de la tarea por ID
    // Llama al servicio para obtener la tarea por ID
    this.tareaService.find(this.id).subscribe({
      next: (data: Tarea) => this.tarea = data,
      error: (err) => {
        console.error('Error al obtener la tarea:', err);
        this.router.navigate(['/tareas/index']);
      }
    });
  }
}
